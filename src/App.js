import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import CardDisabled from './components/modelImage/CardDisabled.png';
import CardSelectedHover from './components/modelImage/CardSelectedHover.png';
import CardSelected from './components/modelImage/CardSelected.png';
import CardDefault from './components/modelImage/CardDefault.png';
import CardDefaultHover from './components/modelImage/CardDefaultHover.png';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      initCard: [
        {
          name: 'Нямушка',
          content: 'с фуа-гра',
          firstBonus: '10 порций',
          secondBonus: 'мышь в подарок',
          thirdBonus: '\u00A0',
          weight: '0,5',
          unit: 'кг'
        },
        {
          name: 'Нямушка',
          content: 'с рыбой',
          firstBonus: '40 порций',
          secondBonus: '2 мыши в подарок',
          thirdBonus: '\u00A0',
          weight: '2',
          unit: 'кг'
        },
        {
          name: 'Нямушка',
          content: 'с курой',
          firstBonus: '100 порций',
          secondBonus: '5 мышей в подарок',
          thirdBonus: 'заказчик доволен',
          weight: '5',
          unit: 'кг'
        }
      ],
      cardData: [
        {
          id: 0,
          image: CardDefault,
          phrase: 'Сказочное заморское яство',
          color: '#666666',
          relation: ['чего сидишь? Порадуй котэ, ', 'чего сидишь? Порадуй котэ, ', 'чего сидишь? Порадуй котэ, '],
          linkPhrase: ' купи.',
          linkColor: ['#1698D9', ''],
          visibility: '1'
        },
        {
          id: 1,
          image: CardDefaultHover,
          phrase: 'Сказочное заморское яство',
          color: '#666666',
          relation: ['чего сидишь? Порадуй котэ, ', 'чего сидишь? Порадуй котэ, ', 'чего сидишь? Порадуй котэ, '],
          linkPhrase: ' купи.',
          linkColor: ['#2EA8E6', ''],
          visibility: '1'
        },
        {
          id: 2,
          image: CardSelected,
          phrase: 'Сказочное заморское яство',
          color: '#666666',
          relation: ['Головы щучьи с чесноком да свежайшая сёмгушка.', 'Печень утки разварная с артишоками.', 'Филе из цыплят с трюфелями в бульоне.'],
          linkPhrase: '',
          linkColor: ['white', ''],
          visibility: '1'
        },
        {
          id: 3,
          image: CardSelectedHover,
          phrase: 'Котэ не одобряет?',
          color: '#E62E7A',
          relation: ['Головы щучьи с чесноком да свежайшая сёмгушка.', 'Печень утки разварная с артишоками.', 'Филе из цыплят с трюфелями в бульоне.'],
          linkPhrase: '',
          linkColor: ['#2EA8E6', ''],
          visibility: '1'
        },
        {
          id: 4,
          image: CardDisabled,
          phrase: 'Сказочное заморское яство',
          color: '#666666',
          relation: ['Печалька, с рыбой закончился.', 'Печалька, с фуа-гра закончился.', 'Печалька, с курой закончился.'],
          linkPhrase: '',
          linkColor: ['', '#FFFF66'],
          visibility: '0.5'
        },
      ]
    };

  }

  getState() {
    return this.state;
  }
  render() {
    return (
      <div className="App">
        <div className='wrapper-app'>
          <div className='header'>Ты сегодня покормил кота?</div>
          <Content {...this.getState()} />
          <div className='footer'></div>
        </div>
      </div>
    );
  }
}

export default App;
