import { clientServices } from "../services/client-services.js";

const form = document.querySelector('[data-form-registro]');

form.addEventListener("submit", (eventosubmit) => {
    eventosubmit.preventDefault();

    const nombre = document.querySelector('[data-form-nombre]').value;
    const precio = document.querySelector('[data-form-precio]').value;
    const categoria = document.querySelector('[data-form-categoria]').value;
    const descripcion = document.querySelector('[data-form-descripcion]').value;
    const imagen = document.querySelector('[data-form-imagen]').value;

    clientServices.crearProducto(nombre, precio, imagen, categoria, descripcion)
        .then(() => {
            Swal.fire(
                'Perfecto!',
                'Producto Creado!',
                'success'
            );
            console.log(respuesta);
            window.location.href = "../index.html";
        })
        .catch((error) => {
            console.log(error);
        });
});
