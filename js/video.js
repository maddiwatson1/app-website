var $dialog = $('#video');
var $placeholder = $('#video-placeholder');

dialogPolyfill.registerDialog($dialog.get(0));

$('#btn-open').on('click', function () {
    $placeholder.html('<iframe src="http://player.vimeo.com/video/81348604?color=ffffff&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
    
$dialog.get(0).showModal();
    
})

$('#btn-close').on('click', function () {
    $dialog.get(0).close();
    $placeholder.html('');
})