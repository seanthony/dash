function alignDivHeights() {
    var height = 0;
    var headers = $(".priority-header").each(function (header) {

        height = Math.max(height, $($(".priority-header")[header]).height());
    });
    console.log(height);
    if (height > 0) {
        height = (height + 2 * 16) + 'px';
        $(".priority-header").css({
            'height': height,
            'magin-bottom': '1rem'
        });
    }
}

$(alignDivHeights)

function loadMap() {
    $('#map').append(HTML_A);
    $('#map').append(HTML_B);
}

$(loadMap)