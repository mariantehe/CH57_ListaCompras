const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

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

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
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
    }//<3
    if(! validarCantidad()){
        txtNumber.style.border="medium red solid";
        alertValidacionesTexto.innerHTML +=
            "<strong>La Cantidad no es correcta</strong>";
        alertValidaciones.style.display="block";
    }//! validarCantidad


});//btnAgregar click