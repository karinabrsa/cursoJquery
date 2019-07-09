(function ($){
    $.fn.vscroll = function (){
        var video = $(this);
        //Para que al regresar a la posicion inicial tmbn regrese con
        //el mismo tamaño se guardan sus valores en variables
        var alto = video.height();
        var ancho = video.width();
        $(window).scroll(function(){
            var posicion = $ (window).scrollTop();
            console.log(posicion);
            if (posicion >=400) {
                video.css({
                    position:"fixed",
                    width:"280px",
                    height:"160px",
                    bottom:"10px",
                    left:"10px"
                });                
            }else{
                video.css({
                    position:"relative",
                    width:ancho,
                    height:alto
                });
            }
            
        });
        
    };
    
}(jQuery))