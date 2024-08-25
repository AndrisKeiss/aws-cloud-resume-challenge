function progressBar(percent, $element) {
    "use strict";
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('.progress div').animate({
        width: percent + '%'
    }, 500);
    
    $element.find('.progress-value').html(percent)
}