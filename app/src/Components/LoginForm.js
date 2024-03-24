import styled from 'styled-components';

const FormHeader = styled.h2`
  padding-left: 26px;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  color: #b2bacd;
  `;

const FormField = styled.input`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 60px;
  padding: 22px 26px;
  border: none;
  border-block: 2px solid #2F394C;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  color: #b2bacd;
  outline: none;
  `;

const FormButton = styled.button`
  display: block;
  width: 100%;
  padding: 23px;
  border: 2px solid transparent;
  text-align: center;
  font: inherit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: #b2bacd;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    border-radius: 0px 0px 10px 10px;
    border: 2px solid #3469C3;
    background: radial-gradient(50% 50% at 50% 50%, #2a3344 0%, #2e3e59 100%);
  }
  `;

const starWarsCharacters = [
  'Han Solo',
  'Jabba The Hutt',
  'R2-D2',
  'Luke Skywalker',
  'Princess Leia Organa',
  'Darth Vader',
  'Chewbacca',
  'Yoda',
  'Obi-Wan Kenobi',
  'Emperor Palpatine',
  'Boba Fett',
  'Lando Calrissian',
  'Darth Maul',
  'Qui-Gon Jinn',
  'Padmé Amidala',
  'Anakin Skywalker',
  'C-3PO',
  'Mace Windu',
  'Count Dooku',
  'Kylo Ren',
  'Finn',
  'Rey',
  'Poe Dameron',
  'BB-8',
  'Captain Phasma',
  'General Grievous',
  'Jango Fett',
  'Snoke',
  'Wicket W. Warrick',
  'Jar Jar Binks',
  'Ahsoka Tano',
  'Admiral Ackbar',
  'Grand Moff Tarkin',
  'R2-Q5',
  'Darth Plagueis',
  'Asajj Ventress',
  'Kit Fisto',
  'Shaak Ti',
  'General Hux',
  'Nien Nunb',
  'Greedo',
  'Watto',
  'Zam Wesell',
  'Sebulba',
  'Dengar',
  'Bossk',
  'IG-88',
  'Lobot',
  'Bib Fortuna',
  'Jek Tono Porkins',
  'Max Rebo'
];

const weirdColors = [
  'Banana Mania',
  'Wisteria',
  'Electric Lime',
  'Razzmatazz',
  'Fuzzy Wuzzy',
  'Atomic Tangerine',
  'Mango Tango',
  'Razzle Dazzle Rose',
  'Razzmic Berry',
  'Wild Watermelon',
  'Vivid Tangerine',
  'Tickle Me Pink',
  'Tropical Rain Forest',
  'Robin Egg Blue',
  'Outer Space',
  'Pacific Blue',
  'Razzleberry',
  'Hot Magenta',
  'Purple Pizzazz',
  'Screamin\' Green',
  'Shocking Pink',
  'Tropical Violet',
  'Unmellow Yellow',
  'Blizzard Blue',
  'Brilliant Rose',
  'Electric Ultramarine',
  'Flamingo Pink',
  'Laser Lemon',
  'Purple Mountain\'s Majesty',
  'Neon Carrot',
  'Orange Red',
  'Orchid',
  'Pink Flamingo',
  'Pink Sherbert',
  'Purple Heart',
  'Violet',
  'Screaming Green',
  'Sizzling Red',
  'Sunset Orange',
  'Tickle Me Pink',
  'Vivid Tangerine',
  'Vivid Violet',
  'White',
  'Yellow Green',
  'Neon Green',
  'Neon Pink',
  'Neon Blue',
  'Neon Yellow',
  'Neon Purple',
  'Neon Orange'
];

const getRandomInt = (list) => Math.floor(Math.random() * list.length);

const LoginForm = () => {
  const uniqueCharacter = starWarsCharacters[getRandomInt(starWarsCharacters)];
  const uniqueColor = weirdColors[getRandomInt(weirdColors)];

  const uniqueStarWarsName = `${uniqueColor} ${uniqueCharacter}`;
  return (
    <form action="/" method="POST">
      <FormHeader>Enter your nickname</FormHeader>
      <label htmlFor="nickname" className="visually-hidden">Your nickname:</label>
      <FormField type="text" id="nickname" value={uniqueStarWarsName} placeholder={uniqueStarWarsName} />
      <FormButton type="submit">START GAME</FormButton>
    </form>
  );
};

export default LoginForm;
