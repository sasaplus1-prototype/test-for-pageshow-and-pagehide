(function(){

  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    var p = document.getElementById('js-dom-content-loaded');

    p.innerHTML += 'DOMContentLoaded<br>';

    console.log('DOMContentLoaded');
  }, false);

  window.addEventListener('pageshow', function(event) {
    var p = document.getElementById('js-pageshow');

    p.innerHTML += 'pageshow, persisted: ' + event.persisted + '<br>';

    console.log('pageshow, persisted: ', event.persisted);
  }, false);

  window.addEventListener('pagehide', function(event) {
    var p = document.getElementById('js-pagehide');

    p.innerHTML += 'pagehide, persisted: ' + event.persisted + '<br>';

    console.log('pagehide, persisted: ', event.persisted);
  }, false);

  window.addEventListener('load', function() {
    var p = document.getElementById('js-load');

    p.innerHTML += 'load<br>';

    console.log('load');
  }, false);

}());
