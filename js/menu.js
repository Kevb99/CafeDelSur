$(document).ready(() => {
    const menu = $('#menu a');
    const titulo = $('#titulo');
    const parrafo = $('#parrafo');
    titulo.hide();
    menu.hide();
    parrafo.hide();
    titulo.show(1200, function () {
        menu.slideDown(1000);
        parrafo.fadeIn(300);
    });
});