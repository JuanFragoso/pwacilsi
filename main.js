// Service Worker
if('serviceWorker' in navigator){
  console.log('Puedes usar los serviceWorker en tu navegador');

  navigator.serviceWorker.register('sw.js')
                          .then(res => console.log('serviceWorker cargado correctamente', res))
                          .catch(err => console.log('serviceWorker no se ha podido registrar', err));
} else {
  console.log('No puedes usar serviceWorker en tu navegador');
}

// Scroll suave
$(document).ready(function(){

  $("#menu a").click(function(e){
    e.preventDefault();

    console.log($('#footer').offset().top); // borrar

    $("html, body").animate({
      scrollTop: $($(this).attr('href')).offset().top
    });

    return false;
  });
});


// browser standalone
