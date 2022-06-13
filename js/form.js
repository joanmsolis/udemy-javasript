// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("formulario").addEventListener('submit', validarFormulario); 
//   });
//   function validarFormulario(evento) {
//     evento.preventDefault();
//     let  nombre = document.getElementById('nombre').value;
//     if(nombre.length == 0) {
//       alert('tiene que llenar este campo');
//       return;
//     }  
//     this.submin();
// }
function valida_envia(){
    //valido el nombre
    if (document.formulario.nombre.value.length == 0){
           alert("Tiene que escribir su nombre");
           document.formulario.nombre.focus()
           return ;
    } 
    alert("mucha gracias por ingresar su datos");
        document.formulario.submit();
}
    valida_envia();
