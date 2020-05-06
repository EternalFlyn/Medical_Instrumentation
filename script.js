$(document).ready(function(){
	$("#menuIcon").click(function() {
		$("#menuContent").slideDown();
	})
	$("#menu").mouseleave(function() {
		$("#menuContent").fadeOut();
	})
	$.ajax({
		type: "GET",
		url: "https://eternalflyn.github.io/Medical_Instrumentation/data.json",
		dataType: "json",
		success: function(data) {
			addButton(data.menu);
		}
	});
});

function addButton(menu) {
	$.each(menu, function(i, n) {
		let title = n["title"];
		let item = n["item"];
		let link = n ["link"];

		let button = document.createElement("div");
		let titleDiv = document.createElement("div");
		let ul = document.createElement("ul");

		button.className = "menuButton";
		button.appendChild(titleDiv);
		button.appendChild(ul);
		
		titleDiv.className = "menuTitle";
		titleDiv.innerHTML = title;
		
		ul.className = title;
		for(let j = 0; j < item.length; j++) {
			let li = document.createElement("li");
			li.innerHTML = item[j];
			li.onclick = function() {jump(title, item[j], link);};
			ul.appendChild(li);
		}

		$("#menuContent").append(button);
	})
	$(".menuTitle").click(function() {
		$(this).parent().children("ul").toggle();
	})
}