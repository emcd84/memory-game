import React from 'react';
import styles from '../styles/Card.module.css';

function Card(props) {
    return(
        <div id={styles.card} onClick={(k) => props.whenCardClicked(props.card)}>
            <img id={styles.image} src={props.card.path} alt={props.card.altText}></img>
            <h1 id={styles.nameLabel}>{props.card.name}</h1>
        </div>
    )
}

export default Card;