$(document).on("turbolinks:load", function() {
		$(".js-ingredient").on('click', AddIngredient);

});

function AddIngredient (event) {
	event.preventDefault();
		var ingredientId = $(this).data("ingredient-id");
		var sandwichId = $(this).data("sandwich-id");
		var apiData = {ingredient_id: ingredientId};
		console.log(apiData)
		$.ajax({
			type: 'POST',
			url: `/api/sandwiches/${sandwichId}/ingredients/add`,
			data: apiData,
			success: function(){
                        location.reload();
                    },
            error: handleError,

		});
}


function handleError(error) {
	console.log("eror")
	console.log(error)
}
