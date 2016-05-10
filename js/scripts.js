$(document).ready(function() {

	// add 'fade-in' class to h1 tag after page loads
	$('h1').addClass('fade-in');

	// add click event to heading the prompts alert "Welcome, Smart Investor!" to user
	$('h1').on('click', function() {
		alert("Welcome, Smart Investor!");
	});

	// add click event to 'read more' that shows additional info
	$('.read-more').on('click', function() {
		$(this).hide("fast", function() {
			alert("This webpage will help you visualize what your retirment savings will be at different ages and investment scenarios");
		});
	});

});