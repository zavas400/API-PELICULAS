const boton = document.querySelector('#btn');
const formulario = document.getElementById('1');


$(document).ready(function(){
    $('#myForm input[type="text"]').blur(function(){
        if(!$(this).val()){
            $(this).addClass("error");
        } else{
            $(this).removeClass("error");
        }
    });
});

boton.addEventListener('click', function(e){
    e.preventDefault();

    
    alert('cicls');


});