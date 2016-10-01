$( ".cross" ).hide();
$( ".menu" ).hide();

$( ".hamburger" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
		$( ".hamburger" ).hide();
		$( ".cross" ).show();
	});
});

$( ".cross" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
	});
});

$( "section" ).click(function() {
	$( ".menu" ).slideUp( "slow", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
	});
});
