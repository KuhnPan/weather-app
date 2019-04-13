// p2d.js
// ========
const docx = require("docx")
const { Document, Paragraph, Packer } = docx;
module.exports = {
  foo: async () => {
    const doc = new Document();
    const paragraph = new Paragraph("Hello World");
    doc.addParagraph(paragraph);
    const packer = new Packer();
    const b64string = await packer.toBase64String(doc);
    console.log("resolved promise string:" + b64string);
    return b64string;
  },
  bar: () => {
    // whatever
  }
};

var zemba = function () {
}
