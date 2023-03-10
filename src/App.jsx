import "./App.css";
import { useState } from "react";
import Form from "./components/form";

const cards = [
	[
		"Golf:who was the youngest winner of the prestigious Masters golf tournament?",
		"Tiger Woods, age 21",
	],
	[
		"Basketball: Who was the MVP of the 1987 NBA Championship?",
		"Magic Johnson",
	],
	["Soccer: Which position can use hands?", "Goalkeeper"],
	[
		"Basketball: Which player did the Los Angeles Lakets sign to a 7-year contract in 1996?",
		"Shaquille O'Neal",
	],
	[
		"Baseball: what position would a baseball player who won the Cy Young Award have played?",
		"pitcher",
	],
];

const App = () => {
	let cardcount = cards.length;

	let [currentCard, nextCard] = useState(0);

	const updateCard = () => {
		if (currentCard == 4) {
			nextCard(0);
			setCard(0);
		} else {
			nextCard((currentCard += 1));
			setCard(0);
		}
	};

	const prevCard = () => {
		if (currentCard == 0) {
			nextCard(4);
			setCard(0);
		} else {
			nextCard((currentCard -= 1));
			setCard(0);
		}
	};

	let [cardSide, setCard] = useState(0);
	const flipCard = () => (cardSide == 0 ? setCard(1) : setCard(0));

	return (
		<div className="App">
			<div className="header">
				<h1>The Ultimate Sport Trivia!</h1>
				<h2>Number of cards: {cardcount}</h2>
				<div className="flashCard">{cards[currentCard][cardSide]}</div>
				<div>
					<Form cardAnswer={cards[currentCard][1]} setCard={setCard} />
				</div>
				<button className="prevCard" onClick={prevCard}>
					⬅️
				</button>
				<button className="nextCard" onClick={updateCard}>
					⏭️
				</button>
			</div>
		</div>
	);
};

export default App;
