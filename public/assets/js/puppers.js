$(function() {
	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newPuppers = {
		    name : $("#name").val().trim(),
		    breed : $("#breed").val().trim(),
		    city : $("#city").val().trim(),
		    state: $("#state").val().trim(),
		    age : parseInt($("#age").val().trim()),
		    size : $("#size").val().trim(),
		    gender : $("#gender").val().trim(),
		    neutered : ($("#neutered").val().trim() === "true") ? 1 : 0,
		    photo : ($("#photo").val().trim() === "") ? "public/assets/images/default_profile.png" : $("#photo").val().trim()
		};

		// Send the POST request.
		$.ajax("/api/pupper", {
		    type: "POST",
		    data: newPuppers
		}).then(
		    function() {
				location.reload();
		    }
		);
	});
});


$(".submit").on("click", function() {
	$("#results-modal").modal("toggle");
});
