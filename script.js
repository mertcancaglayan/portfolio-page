const circle = document.getElementById("circle");
const navbar = document.querySelector("nav");
const navSections = document.querySelectorAll(".navSection");

let firstHover = 0;

navbar.addEventListener("mousemove", function (event) {
	document.body.style.cursor = "none";
	circle.style.display = "flex";
	const x = event.clientX;
	const y = event.clientY;

	if (firstHover === 0) {
		circle.style.left = `${x}px`;
		circle.style.top = `${y}px`;
        firstHover++;
	} else {
		circle.style.left = `${x - circle.offsetWidth / 2}px`;
		circle.style.top = `${y - circle.offsetHeight / 2}px`;
	}
});

navbar.addEventListener("mouseout", function () {
	circle.style.display = "none";
	document.body.style.cursor = "default";
});

navSections.forEach((navSection) => {
	let navItems = navSection.querySelectorAll(".navItem");
	navItems.forEach((item) => {
		item.addEventListener("mouseover", function () {
			circle.style.transform = "scale(2)";
		});

		item.addEventListener("mouseout", function () {
			circle.style.transform = "scale(1)";
		});
	});
});
