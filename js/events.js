function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    addClass('tasty');
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which === 71)
  });
}

$(document).ready(function(){
getIt();
frameIt();

});
