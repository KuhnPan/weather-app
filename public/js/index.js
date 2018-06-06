document.addEventListener('prechange', function(event) {
/*  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');*/
});
var queryWeather = function() {
  document.getElementById('form_1').submit();
  console.log("invoke queryWeather()");
};
ons.ready(function() {
  console.log("invoke ons.ready()");
});
