var book = ePub("/epub/TangPoem300.epub");
var rendition = book.renderTo("area", { flow: "paginated", width: "100%", height: 500 });
var displayed = rendition.display();

function goPre() {
  rendition.prev();
}

function goNext() {
  rendition.next();
}
