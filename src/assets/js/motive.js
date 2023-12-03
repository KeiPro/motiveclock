export function initMotiveTextEvents(){
    document.getElementById('decrease_size').addEventListener('click', function() {
        changeFontSize(-1);
    });
    
    document.getElementById('increase_size').addEventListener('click', function() {
        changeFontSize(1);
    });   
}

function changeFontSize(change) {
    var element = document.querySelector('.motive__text');
    var currentSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));
    element.style.fontSize = (currentSize + change) + 'px';
}
