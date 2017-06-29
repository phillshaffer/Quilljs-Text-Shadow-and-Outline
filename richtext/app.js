const Quill = require('quill');
const shadow = require('../richtext/formats/shadow.js');
const outline = require('../richtext/formats/outline.js');
const shadowModule = require('../richtext/shadow_module.js');
const outlineModule = require('../richtext/outline_module.js');


var toolbarOptions = [
    ['bold', 'italic', 'underline'],        // toggled buttons
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'color': [] }],          // dropdown with defaults from theme
    ['shadow'],
    ['outline'],
    ['clean']                                         // remove formatting button
];

var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions,
        //toolbar: '#toolbar',
        shadow: true,
        outline: true
    },
    theme: 'snow'
});

getDelta();

quill.on('text-change', function() {
    getDelta();
});

function getDelta (){
    let delta = quill.getContents();
    document.getElementById('delta').innerHTML = JSON.stringify(delta, undefined, 2);
}