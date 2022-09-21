const rect = document.querySelector('.rect');

onmousedown = function (e0) {
    onmousemove = function (e) {
        const top = Math.max(Math.min(e.clientY - e0.layerY, innerHeight - 300), 0);
        const left = Math.max(Math.min(e.clientX - e0.layerX, innerWidth - 300), 0);

        rect.style.top = `${top}px`;
        rect.style.left = `${left}px`;
    };
};

onmouseup = function (e) {
    onmousemove = null;
};

