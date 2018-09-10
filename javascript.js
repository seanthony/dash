function alignDivHeights() {
    var height = 0;
    var headers = $(".priority-header").each(function (header) {

        height = Math.max(height, $($(".priority-header")[header]).height());
    });
    console.log(height);
    if (height > 0) {
        height = (height + 2 * 16) + 'px';
        $(".priority-header").css({
            'height': height
        });
    }
}

$(alignDivHeights)

function loadMap() {
    $('#map').html(HTML_A);
    $('#map').append(HTML_B);
}

$(loadMap)