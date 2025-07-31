const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);

const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");

let cont = 0;
let totalenProductos = 0;
let costoTotal = 0;

function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
    }//Tenga información

    if (isNaN(txtNumber.value)){
        return false;
    }//Tiene que ser un número

    if (Number(txtNumber.value)<=0){
        return false;
    }// Mayor que 0

    return true;
}//validarCantidad

function getPrecio(){
    return Math.round(Math.random() * 10000)/ 100;
}//getPrecio

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    let isValid = true;
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    txtName.style.border="";
    txtNumber.style.border="";
    //Name
    //validar que tenga información mínimo 3 letras
    if(txtName.value.length<3){
        txtName.style.border="medium red solid";
        alertValidacionesTexto.innerHTML=
            "<strong>El Nombre del producto no es correcto</strong>";
        alertValidaciones.style.display="block";
        isValid =false;
    }//<3
    if(! validarCantidad()){
        txtNumber.style.border="medium red solid";
        alertValidacionesTexto.innerHTML +=
            "<strong>La Cantidad no es correcta</strong>";
        alertValidaciones.style.display="block";
        isValid =false;
    }//! validarCantidad

    if (isValid){
        cont++;
        let precio = getPrecio();
        let row = `<tr>
                    <td>${cont}</td>
                    <td>${txtName.value}</td>
                    <td>${txtNumber.value}</td>
                    <td>${precio}</td>
                </tr>
        `;
        cuerpoTabla.insertAdjacentHTML("beforeend", row);
        contadorProductos.innerText=cont;
        totalenProductos += Number(txtNumber.value);
        productosTotal.innerText = totalenProductos;
        costoTotal += precio * Number(txtNumber.value);
        //costoTotal.toFixed(2); forma fácil
        precioTotal.innerText = new Intl.NumberFormat("es-MX", 
                    { style: "currency", currency: "MXN" }).format(costoTotal);
        txtName.value ="";
        txtNumber.value ="";
        txtName.focus();
    }//isValid
});//btnAgregar click