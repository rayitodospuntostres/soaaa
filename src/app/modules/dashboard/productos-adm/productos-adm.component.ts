// productos-adm.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service'; // Ajustar la ruta al servicio
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos-adm',
  templateUrl: './productos-adm.component.html',
  styleUrls: ['./productos-adm.component.css']
})
export class ProductosAdmComponent implements OnInit {
  productos: any[] = []; // Lista de productos
  productoForm: FormGroup; // Formulario reactivo
  editMode: boolean = false; // Modo edición
  productoSeleccionado: any = null; // Producto seleccionado para editar

  constructor(private fb: FormBuilder, private productosService: ProductosService) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosService.getProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al cargar productos:', error);
        Swal.fire('Error', 'No se pudieron cargar los productos.', 'error');
      }
    );
  }

  abrirFormulario() {
    this.editMode = false;
    this.productoSeleccionado = null;
    this.productoForm.reset();
    const modal = new (window as any).bootstrap.Modal(document.getElementById('productoModal'));
    modal.show();
  }

  guardarProducto() {
    if (this.productoForm.invalid) return;

    const producto = this.productoForm.value;

    if (this.editMode) {
      this.productosService.updateProducto(this.productoSeleccionado.id, producto).subscribe(
        () => {
          Swal.fire('Éxito', 'Producto actualizado.', 'success');
          this.cargarProductos();
        },
        (error) => Swal.fire('Error', 'No se pudo actualizar el producto.', 'error')
      );
    } else {
      this.productosService.createProducto(producto).subscribe(
        () => {
          Swal.fire('Éxito', 'Producto creado.', 'success');
          this.cargarProductos();
        },
        (error) => Swal.fire('Error', 'No se pudo crear el producto.', 'error')
      );
    }
  }

  editarProducto(producto: any) {
    this.editMode = true;
    this.productoSeleccionado = producto;
    this.productoForm.patchValue(producto);
    const modal = new (window as any).bootstrap.Modal(document.getElementById('productoModal'));
    modal.show();
  }

  eliminarProducto(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productosService.deleteProducto(id).subscribe(
          () => {
            Swal.fire('Eliminado', 'Producto eliminado.', 'success');
            this.cargarProductos();
          },
          (error) => Swal.fire('Error', 'No se pudo eliminar el producto.', 'error')
        );
      }
    });
  }
}
