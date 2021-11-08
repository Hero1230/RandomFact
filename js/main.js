const currentDay = document.querySelector(".current-day");
const funFact = document.querySelector(".fun-fact");

const URL = "https://uselessfacts.jsph.pl/random.json?language=en";

const day = new Date();
currentDay.textContent = day.toLocaleString("en", { weekday: "long" });

const showRandomFact = () => {
	fetch(URL)
		.then((res) => res.json())
		.then((data) => (funFact.textContent = data.text))
		.catch((err) => console.log(err));
};

showRandomFact();
