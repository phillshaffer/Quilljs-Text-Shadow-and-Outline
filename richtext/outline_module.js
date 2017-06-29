const Quill = require('quill');
const outline = require('../richtext/formats/outline.js');

Quill.register('modules/outline', function(quill, options) {
        
        let customButton = document.querySelector('.ql-outline');
        customButton.addEventListener('click', function() {
            quill.format('outline', '4px rgba(255, 157, 171, 0.85)')
        });
    });

module.exports = Quill;