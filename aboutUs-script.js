$(document).on('click', '.toggle',
	function(event) {
		event.preventDefault();

		var target = $(this).data('target');
		$('#' + target).toggleClass('hide');
	});