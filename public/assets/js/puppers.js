$("#searchform").on("submit", function(event) {
	event.preventDefault();
	console.log("submitted")
	console.log("This is the event",event)
	var data = {
		city: $("#searchform [name=search]").val().trim()
	}

	console.log("This is the city Input", data)

	$.ajax("/searchcity", {
		type: "PUT",
		data: data,
		success: function(){
			location.reload(tue);
		}
	})

	// $.post("/searchcity", data, function (result) {
	// 		console.log("heres result", result)
	// 		location.reload(true);
	// 	}
	// );
});




// $(".create-form").on("submit", function(event) {
// 	event.preventDefault();

// 	var newPuppers = {
// 		name : $("#name").val().trim(),
// 		breed : $("#breed").val().trim(),
// 		city : $("#city").val().trim(),
// 		state: $("#state").val().trim(),
// 		age : parseInt($("#age").val().trim()),
// 		size : $("#size").val().trim(),
// 		gender : $("#gender").val().trim(),
// 		neutered : ($("#neutered").val().trim() === "true") ? 1 : 0,
// 		photo : ($("#photo").val().trim() === "") ? "public/assets/images/default_profile.png" : $("#photo").val().trim()
// 	};

// 	// Send the POST request.
// 	$.ajax("/api/pupper", {
// 		type: "POST",
// 		data: newPuppers
// 	}).then(
// 		function() {
// 			// location.reload();
// 			pageRedirect();
// 		}
// 	);
// 	pageRedirect();
// });


// $(".submit").on("click", function() {
// 	$("#results-modal").modal("toggle");
// });
