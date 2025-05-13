/*
 * Image preview script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */

this.imagePreview = function () {
	/* CONFIG */

	xOffset = 50;
	yOffset = 50;

	previewWidth = 300;
	previewHeight = 200;

	$("a.preview").hover(function (e) {
		this.t = this.title;
		this.title = "";
		var c = (this.t != "") ? "<br/>" + this.t : "";
		$("body").append("<p id='preview'><img style='width:" + previewWidth + "px;' src='" + this.href + "' alt='Image preview' />" + c + "</p>");

		var previewDir = $(this).attr("previewDir");
		switch (previewDir) {
			case "S":
				$("#preview")
					.css("top", (e.pageY + yOffset) + "px")
					.css("left", e.pageX - previewWidth/2 + "px")
					.fadeIn("fast");
				break;
			case "SW":
				$("#preview")
					.css("top", (e.pageY + yOffset) + "px")
					.css("left", (e.pageX - xOffset - previewWidth) + "px")
					.fadeIn("fast");
				break;
			case "NW":
				$("#preview")
					.css("top", (e.pageY - yOffset - previewHeight) + "px")
					.css("left", (e.pageX - xOffset - previewWidth) + "px")
					.fadeIn("fast");
				break;
			case "N":
				$("#preview")
					.css("top", (e.pageY - yOffset - previewHeight) + "px")
					.css("left", e.pageX - previewWidth / 2 + "px")
					.fadeIn("fast");
				break;
			case "NE":
				$("#preview")
					.css("top", (e.pageY - yOffset - previewHeight) + "px")
					.css("left", (e.pageX - xOffset) + "px")
					.fadeIn("fast");
				break;
			default:
				$("#preview")
					.css("top", (e.pageY + yOffset) + "px")
					.css("left", (e.pageX + xOffset) + "px")
					.fadeIn("fast");
				break;
		}
	},
	function () {
		this.title = this.t;
		//$("#preview").fadeOut("fast", function () {
		$("#preview").remove();
		//});
	});
	$("a.preview").mousemove(function (e) {
		var previewDir = $(this).attr("previewDir");
		switch (previewDir) {
			case "S":
				$("#preview")
					.css("top", (e.pageY + yOffset) + "px")
					.css("left", e.pageX - previewWidth / 2 + "px");
				break;
			case "SW":
				$("#preview")
					.css("top", (e.pageY + yOffset) + "px")
					.css("left", (e.pageX - xOffset - previewWidth) + "px");
				break;
			case "NW":
				$("#preview")
					.css("top", (e.pageY - yOffset - previewHeight) + "px")
					.css("left", (e.pageX - xOffset - previewWidth) + "px");
				break;
			case "N":
				$("#preview")
					.css("top", (e.pageY - yOffset - previewHeight) + "px")
					.css("left", e.pageX - previewWidth / 2 + "px");
				break;
			case "NE":
				$("#preview")
					.css("top", (e.pageY - yOffset - previewHeight) + "px")
					.css("left", (e.pageX + xOffset) + "px");
				break;
			default:
				$("#preview")
					.css("top", (e.pageY + yOffset) + "px")
					.css("left", (e.pageX + xOffset) + "px");
				break;
		}
	});
};
