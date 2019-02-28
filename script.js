/*
Rendere visibile la scritta "live coding"
dentro il cerchio arancione quando passo con il mouse sul cerchio
*/

/*METODO CON L'EVENTO ".HOVER"

Modello: $(.selector).event( function() {code}, function() {code} );
*/

$("#circle").hover(                   //seleziono il cerchio con il suo ID e inserico l'evento
  function() {                        //quando si verifica l'evento parte l'azione ".show"

  $("h1#textCircle").show();          //".show"(mostra l'elemento) si deve scatenare sul testo nel cerchio (h1#textCircle)
},
  function() {

  $("h1#textCircle").hide();          //".hide"(nasconde l'elemento)
});



/*METODO CON EVENTI INSERITI SINGOLARMENTE ALL'ELEMENTO

Modello: $(".selector").action( function() {code} );
*/

$("#circle").mouseenter (             //inseriamo prima l'evento ".mouseenter"(quando il mouse entra in "#circle")
  function(){

  $("h1#textCircle").show()
});                                   //fine evento

$("#circle").mouseleave (             //altro evento(.mouseleave) che ha luogo sullo stesso elemento di prima (#circle)
  function(){

  $("h1#textCircle").hide()
});                                   //fine evento



/*METODO CON EVENTI MULTIPLI

Modello: $(.selector).on({ event: function(){code}, event: function(){code} });
*/

$("#circle").on({                      //il metodo ".on" allega 1 o più eventi all'elemento selezionato

  mouseenter: function(){              //evento "mouseenter"(quando il mouse entra in "#circle")

    $("h1#textCircle").show()
  },
  mouseleave: function (){             //evento "mouseleave"(quando il mouse esce da "#circle")

    $("h1#textCircle").hide()
  }
});
