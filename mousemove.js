window.addEventListener('load', function () { 
    var cursor = document.getElementById('cursor'),
        X = 0,
        Y = 0,mouseX=0,mouseY=0; 
    window.addEventListener('mousemove', function (ev) {
        ev = window.event || ev; 
        X=ev.pageX;
        Y=ev.pageY;
    });

    function move() {
        cursor.style.left = X + 'px';
        cursor.style.top = Y + 'px';
        
        setTimeout(move, 100);
    }
    move();
    
    window.addEventListener('mousedown', function() {
        cursor.classList.add('click')
    });
    window.addEventListener('mouseup', function() {
        cursor.classList.remove('click')
    });    
});

