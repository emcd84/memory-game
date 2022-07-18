import React, { useState } from 'react';
import styles from '../styles/CardContainer.module.css';
import uniqid from 'uniqid';
import Card from './Card';
import VladimirGuerreroJr from '../photos/vladimirguerrerojr.jpeg';
import BoBichette from '../photos/bobichette.jpeg';
import TeoscarHernandez from '../photos/teoscarhernandez.jpeg';
import AlejandroKirk from '../photos/alejandrokirk.jpeg';
import GeorgeSpringer from '../photos/georgespringer.jpeg';
import KevinGausman from '../photos/kevingausman.jpeg';
import AlekManoah from '../photos/alekmanoah.jpeg';
import JoseBerrios from '../photos/joseberrios.jpeg';

function CardContainer(props) {
    const initialState = [
        {
            name: "Vladimir Guerrero Jr",
            path: VladimirGuerreroJr,
            altText: 'Headshot of Vladimir Guerrero Jr',
            clicked: false,
            id: uniqid(),
        },
        {
            name: "Bo Bichette",
            path: BoBichette,
            altText: 'Headshot of Bo Bichette',
            clicked: false,
            id: uniqid(),
        },
        {
            name: "Teoscar Hernandez",
            path: TeoscarHernandez,
            altText: 'Headshot of Teoscar Hernandez',
            clicked: false,
            id: uniqid(),
        },
        {
            name: "Alejandro Kirk",
            path: AlejandroKirk,
            altText: 'Headshot of AlejandroKirk',
            clicked: false,
            id: uniqid(),
        },
        {
            name: "George Springer",
            path: GeorgeSpringer,
            altText: 'Headshot of George Springer',
            clicked: false,
            id: uniqid(),
        },
        {
            name: "Kevin Gausman",
            path: KevinGausman,
            altText: 'Headshot of Kevin Gausman',
            clicked: false,
            id: uniqid(),
        },
        {
            name: "Alek Manoah",
            path: AlekManoah,
            altText: 'Headshot of Alek Manoah',
            clicked: false,
            id: uniqid(),
        },
        {
            name: "Jose Berrios",
            path: JoseBerrios,
            altText: 'Headshot of Jose Berrios',
            clicked: false,
            id: uniqid(),
        }
    ];

    const [ cards, setCards ] = useState(shuffle(initialState));

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
    
    const whenCardClicked = (card) => {
        if(!card.clicked) {
            let cardsTemp = cards;
            const cardIndex = cardsTemp.indexOf(card);
            card.clicked = true;
            cardsTemp.splice(cardIndex, 1, card);
            shuffle(cardsTemp);
            setCards(cardsTemp);
            props.incrementScore();
        } else {
            props.resetScore();
            setCards(shuffle(initialState));
        }
    }

    return(
        <div id={styles.cardContainer}>
            {cards.map((card) => {
                return <Card key={card.id} card={card} whenCardClicked={whenCardClicked}/>
            })}
        </div>
    );
}

export default CardContainer;