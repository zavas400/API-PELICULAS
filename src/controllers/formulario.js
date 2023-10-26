const formulario =document.querySelector('#formulario');
const inputBuscar = document.querySelector('form  input[name=elenco]');
const inputs = document.querySelectorAll('form input');
var verify = 0;
var invalido =0;
var breakOut =0;



formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    inputs.forEach(function(input){
        if(breakOut != 1){
            if(verify === 5){
                console.log('no pasa nada');
            }else{
                if(!$(input).val()){
                    alert('rellene todos los campos necesarios');
                    breakOut=1;
                    invalido =1;
                }
            }
        }

        verify +=1;
    });
    breakOut=0;
    if(invalido===0){
        console.log('post data');
    }
    invalido=0;


    
    

});


