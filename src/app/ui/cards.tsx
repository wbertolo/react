'use client';
import Card from './card';
import { useState } from 'react';
import { useEffect } from "react";
import CatSelector from './catselector';
// import { CardDef } from './../lib/definitions';


export default function Cards({ cards }: { cards:Array<object> }) {
	const cardCollection = cards;
	const [filteredCardCollection, setFilteredCardCollection] = useState(cards);
	const [category, setCategory] = useState('All');

	useEffect(() => {
		const filteredCards:object[] = [];
		if (category != 'All') {
			cardCollection.map((card:any) => {
				if (card.category === category) {
					filteredCards.push(card);
				}
			});
			setFilteredCardCollection(filteredCards);
		} else {
			setFilteredCardCollection(cardCollection); 
		}
      },[category, cardCollection]);

	return (
		<div>
			<CatSelector setCategory={setCategory} />
			<div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr grid-flow-row">
				{filteredCardCollection.map((card:any) => (
						<Card
							key={card.id}
							title={card.name}
							description={card.description}
							category={card.category}
							imgSrc={`/images/${card.image}`}
							href={card.url}
						/>		
				))}
			</div>
		</div>
	)
}