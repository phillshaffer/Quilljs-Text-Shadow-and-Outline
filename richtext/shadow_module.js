const Quill = require('quill');
const shadow = require('../richtext/formats/shadow.js');

Quill.register('modules/shadow', function(quill, options) {
        
        let customButton = document.querySelector('.ql-shadow');
        customButton.addEventListener('click', function() {
            quill.format('shadow', '4px 4px 4px rgba(255, 157, 171, 0.85)')
        });
    });

module.exports = Quill;


