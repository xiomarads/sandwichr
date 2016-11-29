// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
$(document).on("turbolinks:load", function() {
$(".js-ingredient").on('click', addIngredient);

});

function addIngredient (event) {
	eventhero.preventDefault();
	$('.js-ingredients').empty();

		var sandwichId = $(this).data("sandwich-id");
		var ingredientId = $(this).data("ingredient-id")


		var apiData = {ingredient_id: ingredientId};

	$.ajax({
		type: "POST",
		url: `/api/sandwiches/${sandwichId}/ingredients/add`,
		data: apiData,
		success: function(){
						location.reload();
		},
		error: handleError,
	});
}

function handleError (theError) {
	console.log("error")
	console.log(error)
}
