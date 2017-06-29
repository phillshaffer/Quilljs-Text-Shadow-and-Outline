const Quill = require('quill');
const Parchment = Quill.import('parchment');

let outline = new Parchment.Attributor.Style("outline", "-webkit-text-stroke", { scope: Parchment.Scope.INLINE });
Quill.register(outline);

module.exports = { outline };