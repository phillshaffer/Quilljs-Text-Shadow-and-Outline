const Quill = require('quill');
const Parchment = Quill.import('parchment');

let shadow = new Parchment.Attributor.Style("shadow", "text-shadow", { scope: Parchment.Scope.INLINE });
Quill.register(shadow);

module.exports = { shadow };