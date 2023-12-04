export function initMotiveTextEvents(){
    document.getElementById('decrease_size').addEventListener('click', function() {
        changeFontSize(-3);
    });
    
    document.getElementById('increase_size').addEventListener('click', function() {
        changeFontSize(3);
    });   
}

function changeFontSize(size) {
    var element = document.querySelector('.motive__text');
    var currentSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));
    element.style.fontSize = (currentSize + size) + 'px';
}
