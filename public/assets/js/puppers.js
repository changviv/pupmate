$(".create-form").on("submit", function(event) {
	event.preventDefault();

	name = $("#name").val().trim();
	breed = $("#breed").val().trim();
	city = $("#city").val().trim();
	age = $("#age").val();
	size = $("#size").val();
	gender = $("#gender").val();
	neutered = $("#neutered").val();
	photo = $("#photo").val();


	console.log("name ",name);
	console.log("breed ",breed);
	console.log("city ",city);
	console.log("age ",age);
	console.log("size ",size);
	console.log("gender ",gender);
	console.log("neutered ",neutered);
	console.log("photo ",photo);

})