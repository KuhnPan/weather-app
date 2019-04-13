document.addEventListener('prechange', function(event) {
/*  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');*/
  if (event.tabItem.getAttribute('label') === '主页') {
    console.log(1111); 
    document.querySelector('ons-toolbar .right').style.display = "none";
  }
  else if (event.tabItem.getAttribute('label') === '设置') {
    console.log(2222); 
    document.querySelector('ons-toolbar .right').style.display = "inline";
  }
  else {
    console.log(3333);
    document.querySelector('ons-toolbar .right').style.display = "none";
  }
});
var queryWeather = function() {
  document.getElementById('form_1').submit();
  console.log("invoke queryWeather()");
};
ons.ready(function() {
  console.log("invoke ons.ready()");
});

function readfile() {
var data = {};
data.path = '/home/test/pgadmin.txt';
data.ext = '.txt';
console.log(data);
  $.ajax({
    url: '/read_file',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function(data) {
      console.log("kpllllll:"+data);
    }
  });
}

function pdf2doc() {
//var data = {};
//data.path = '/home/test/pgadmin.txt';
//data.ext = '.txt';
//console.log(data);
//  $.ajax({
//    url: '/pdf2doc',
//    type: 'GET',
//    contentType: 'application/json',
//    data: JSON.stringify(data),
//    success: function(data) {
//      console.log("pdf2doc data:"+data);
//    }
//  });
window.location.href = '/pdf2doc';
}
