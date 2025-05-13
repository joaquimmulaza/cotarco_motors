
$(document).ready(function () {
	//enableHoverEffects();
	imagePreview();
});

function enableHoverEffects() {
	$("#topLeftCorner").hide();
	$("#bottomLeftCorner").hide();

	$("#leftImage").hover(function () {
		$("#topLeftCorner").fadeIn("slow");
		$("#bottomLeftCorner").fadeIn("slow");
	}, function () {
		$("#topLeftCorner").fadeOut("slow");
		$("#bottomLeftCorner").fadeOut("slow");
	});

	$("#topCorner").hide();
	$("#bottomCorner").hide();

	$("#centerImage").hover(function () {
		$("#topCorner").fadeIn("slow");
		$("#bottomCorner").fadeIn("slow");
	}, function () {
		$("#topCorner").fadeOut("slow");
		$("#bottomCorner").fadeOut("slow");
	});

	$("#topRightCorner").hide();
	$("#bottomRightCorner").hide();

	$("#rightImage").hover(function () {
		$("#topRightCorner").fadeIn("slow");
		$("#bottomRightCorner").fadeIn("slow");
	}, function () {
		$("#topRightCorner").fadeOut("slow");
		$("#bottomRightCorner").fadeOut("slow");
	});
}