$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

$(document).ready(function () {
	// Add minus icon for collapse element which is open by default
	$(".collapse.show").each(function () {
	  $(this)
		.prev(".card-header")
		.find(".fa")
		.addClass("fa-minus")
		.removeClass("fa-plus");
	});
  
	// Toggle plus minus icon on show hide of collapse element
	$(".collapse")
	  .on("show.bs.collapse", function () {
		$(this)
		  .prev(".card-header")
		  .find(".fa")
		  .removeClass("fa-plus")
		  .addClass("fa-minus");
	  })
	  .on("hide.bs.collapse", function () {
		$(this)
		  .prev(".card-header")
		  .find(".fa")
		  .removeClass("fa-minus")
		  .addClass("fa-plus");
	  });
  });
  