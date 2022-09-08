$(function() {
    /* open popup */
    $('a.popup').click(function(){
        var id = $(this).attr('rel');
        $('#'+id).show();
    });

    /* close popup */
    $('.popup-theme .overlay-bg, .popup-close-x, .popup-close').click(function() {
        $(this).closest('.popup-theme').hide();
    });

    $('#donate-object .object-list input[type=radio]').click(function(){
		$(this).closest('.popup-theme').hide();
        $('#donate-object-selected').addClass('selected');
        $('#donate-object-selected > b').text( $(this).val() );
	});
});