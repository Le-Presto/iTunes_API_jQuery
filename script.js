$(document).ready(function () {
    $('#clear').hide();

    $('#showResults').on('click', function() {
        $.ajax({
            url: "https://itunes.apple.com/search?term=" + $("#selectArtist").val(),
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (result) {
                console.log(result);
                console.log(result.resultCount);
                displayResult(result);
            },
            error: function () {
                alert('Failed!');
            }
        });
    });
    $('#clear').on('click', function() {
        $("#res").empty();
    });

});

function displayResult(json) {
        $('#clear').show();
        $("#res").empty();
        var html = '<br><table class="table table-striped">';
        json.resultCount = $('#resultCount').val();
        for (var i = 0; i < json.resultCount; i++) {

            html += '<tr><td>';
            html += "<img src='" + json.results[i].artworkUrl100 + "'>";
            html += '</td><td>';
            html +=  json.results[i].trackName;
            html += '</td><td>';
            html += "<audio controls='true' src=" + json.results[i].previewUrl + " id='audio' type='audio/m4a'></audio>";
            html += '</td></tr>';

        }
        html += '</table>';
        console.log();
        //set the built HTML into the page
        $("#res").append(html);
}
