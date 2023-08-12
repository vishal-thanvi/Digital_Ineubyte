$(document).ready(function() {
    // Original code for text animation
    $('#ani').hide().contents().each(function() {
        if (this.nodeType === 3) { // Text node
            $(this).replaceWith($(this).text().replace(/./g, '<span class="animated-text">$&</span>'));
        }
    });

    $('.animated-text').each(function(i) {
        $(this).delay(50 * i).animate({ opacity: 1 }, 500);
    });

    // Handle the button click event for changing background color
    $('.change-color-button').click(function() {
        $('#ani').css('background-color', 'orange');
    });
});
