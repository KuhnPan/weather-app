document.addEventListener('prechange', function(event) {
/*  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');*/
  if (event.tabItem.getAttribute('label') === '主页') {
    console.log(1111); 
    document.querySelector('ons-toolbar .right').style.display = "none";
  } else {
    console.log(2222); 
    document.querySelector('ons-toolbar .right').style.display = "inline";
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


document.addEventListener('init', function(event) {
  if(event.target.id === 'Tab2') {
    console.log('init Tab2 page');
    var items = 5;
    while (items--) {
      addItem();
    }
    document.querySelector('ons-list').onclick = showItem;
  }
  document.querySelector('ons-toolbar .right').style.display = "none";
});
function addItem() {
  var list = document.querySelector('ons-list');
  var newItem = document.createElement('ons-list-item');
  newItem.innerHTML = newItem.id = '企业' + list.children.length;
  //newItem.onclick = showItem; // Also works
  myItems[newItem.id] = {
    customData: '名片：' + newItem.id
  };
  list.appendChild(newItem);
}
function showItem(event) {
  var item = event.target;
  while (item.tagName.toLowerCase() !== 'ons-list-item') {
    item = item.parentNode;
    if (!item.tagName || item.tagName.toLowerCase() === 'ons-list') {
      return;
    }
  }
  ons.notification.alert(myItems[item.id].customData);
}
var myItems = {};
