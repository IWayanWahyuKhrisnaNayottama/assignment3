$(document).ready(function() {
	// Show the first tab by default
	$('.tab-content:first-child').show();
  
	// Handle click events for the tabs
	$('.tabs a').click(function(e) {
	  e.preventDefault();
  
	  // Remove the "active" class from all tabs
	  $('.tabs a').removeClass('active');
  
	  // Add the "active" class to the clicked tab
	  $(this).addClass('active');
  
	  // Hide all tab content
	  $('.tab-content').hide();
  
	  // Show the content for the clicked tab
	  var content = $(this).attr('href');
	  $(content).show();
	});
  });
  