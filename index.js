(function(){

  'use strict';

  var send = document.getElementById('js-send');

  send.addEventListener('click', function() {
    navigator.sendBeacon('/', JSON.stringify({
      date: String(new Date),
    }));
  }, false);

  window.addEventListener('unload', function() {
    navigator.sendBeacon('/', String(new Date));
  }, false);

}());
