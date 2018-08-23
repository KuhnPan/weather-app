var book = ePub("/TangPoem300.epub");
var rendition = book.renderTo("area", { method: "default", width: "100%", height: "100%" });
var displayed = rendition.display();

function goPre() {
  rendition.prev();
}

function goNext() {
  rendition.next();
}
