function ejemploError() {
try{
                cambiarImagen(imagen1);
                alert('Se cambió la imagen'+imagen1);
}
catch(e){alert('Se produjo un error. Referencia: '+e);}
alert('A continuación se le solicitarán los datos fiscales');
}
