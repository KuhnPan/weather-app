var myItems = {};
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
