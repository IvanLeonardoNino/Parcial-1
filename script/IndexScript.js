

$(function ModificarTabla() {
    $("#btnGustos").click(function () {
        /*
 
         var element = document.getElementById('form');
         var style = window.getComputedStyle(element);
         var height = style.getPropertyValue('height');
 
 
         alert("height");
 
 var altura =(height +200);
 
 
         $("form").css({ "height": 'altura px' })
 */


        $("#ocultar").show();
        $("form").css({ "height": "600px" })


        $("#tablagustos")
            .append
            (
                $('<tr>')
                    .append
                    (
                        $('<td>')
                            .append
                            (
                                $('<input>').attr('type', 'text').attr('id', 'textotabla')
                            )
                    )
                    .append
                    (
                        $('<td>')
                            .append
                            (
                                $('<input>').attr('type', 'text').attr('id', 'textotabla')
                            )
                    )
                    .append
                    (
                        $('<td>')
                            .append
                            (
                                $('<p>').attr('id', 'modificar').text('Editar')
                            )
                    )
            );
var cont =1;

document.getElementById("textotabla[cont]").value = document.getElementById("GustosC").value;


    });
});


cont=cont+1;


$(function copiar() {

    
});
