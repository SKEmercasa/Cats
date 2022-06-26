import Card from './Cards/Card';
import { useState } from 'react';
import InstanceRelation from './InstanceRelation/InstanceRelation';

const Content = (props) => {
    const onClick = (e) => {
        switch (e.id) {
            case props.cardData[0].id:
                return {
                    ...e,
                    color: props.cardData[2].color,
                    id: props.cardData[2].id,
                    image: props.cardData[2].image,
                    linkColor: props.cardData[2].linkColor,
                    linkPhrase: props.cardData[2].linkPhrase,
                    phrase: props.cardData[2].phrase,
                    relation: props.cardData[2].relation
                }
            case props.cardData[4].id:
                return e
            default:
                return {
                    ...e,
                    color: props.cardData[0].color,
                    id: props.cardData[0].id,
                    image: props.cardData[0].image,
                    linkColor: props.cardData[0].linkColor,
                    linkPhrase: props.cardData[0].linkPhrase,
                    phrase: props.cardData[0].phrase,
                    relation: props.cardData[0].relation
                }
        }
    }
    const onHover = (e) => {
        switch (e.id) {
            case props.cardData[1].id:
                return {
                    ...e,
                    color: props.cardData[0].color,
                    id: props.cardData[0].id,
                    image: props.cardData[0].image,
                    linkColor: props.cardData[0].linkColor,
                    linkPhrase: props.cardData[0].linkPhrase,
                    phrase: props.cardData[0].phrase,
                    relation: props.cardData[0].relation
                }
            case props.cardData[2].id:
                return {
                    ...e,
                    color: props.cardData[3].color,
                    id: props.cardData[3].id,
                    image: props.cardData[3].image,
                    linkColor: props.cardData[3].linkColor,
                    linkPhrase: props.cardData[3].linkPhrase,
                    phrase: props.cardData[3].phrase,
                    relation: props.cardData[3].relation
                }
            case props.cardData[3].id:
                return {
                    ...e,
                    color: props.cardData[2].color,
                    id: props.cardData[2].id,
                    image: props.cardData[2].image,
                    linkColor: props.cardData[2].linkColor,
                    linkPhrase: props.cardData[2].linkPhrase,
                    phrase: props.cardData[2].phrase,
                    relation: props.cardData[2].relation
                }
            case props.cardData[4].id:
            default:
                return e
        }
    }
    const outHover = (e) => {
        switch (e.id) {
            case props.cardData[0].id:
                return {
                    ...e,
                    color: props.cardData[1].color,
                    id: props.cardData[1].id,
                    image: props.cardData[1].image,
                    linkColor: props.cardData[1].linkColor,
                    linkPhrase: props.cardData[1].linkPhrase,
                    phrase: props.cardData[1].phrase,
                    relation: props.cardData[1].relation
                }
            case props.cardData[2].id:
                return {
                    ...e,
                    color: props.cardData[3].color,
                    id: props.cardData[3].id,
                    image: props.cardData[3].image,
                    linkColor: props.cardData[3].linkColor,
                    linkPhrase: props.cardData[3].linkPhrase,
                    phrase: props.cardData[3].phrase,
                    relation: props.cardData[3].relation
                }
            case props.cardData[4].id:
            default:
                return e
        }
    }
    let [firstCard, setFirstCard] = useState(() => props.cardData[0]);
    let [secondCard, setSecondCard] = useState(() => props.cardData[0]);
    let [thirdCard, setThirdCard] = useState(() => props.cardData[4]);
    return (
        <div>
            <div className='content'>
                <Card init={props.initCard[0]} setCard={setFirstCard} Card={firstCard} onClick={onClick} onHover={onHover} outHover={outHover} />
                <Card init={props.initCard[1]} setCard={setSecondCard} Card={secondCard} onClick={onClick} onHover={onHover} outHover={outHover} />
                <Card init={props.initCard[2]} setCard={setThirdCard} Card={thirdCard} onClick={onClick} onHover={onHover} outHover={outHover} />
            </div>
            <div className='relationCard'>
                <InstanceRelation setCard={setFirstCard} Card={firstCard} onClick={onClick} onHover={onHover} outHover={outHover} />
                <InstanceRelation setCard={setSecondCard} Card={secondCard} onClick={onClick} onHover={onHover} outHover={outHover} />
                <InstanceRelation setCard={setThirdCard} Card={thirdCard} onClick={onClick} onHover={onHover} outHover={outHover} />
            </div>
        </div>
    )
}

export default Content;