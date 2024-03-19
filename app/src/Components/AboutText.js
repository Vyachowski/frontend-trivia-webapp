import styled from 'styled-components';
import { borderColor, mainWindowsColor } from './cssVariables';

const Section = styled.section`
  background-color: ${mainWindowsColor};
  `;

const Header = styled.h2`
  maring-bottom: 10px;
  border-bottom: 1px solid ${borderColor};
  `;

const AboutText = () => (
  <Section>
    <Header>About header</Header>
    <p>
      CodeCraft: Frontend Frenzy - Leaderboard Challenge

      Compete for leaderboard glory in HTML, CSS, and JS.
      Climb ranks, prove skills, reach the top!

      Immersive Interface

      Experience the thrill of coding like never before with our immersive interface,
      meticulously crafted with styled components. From the moment you enter the game,
      you&apos;ll be captivated by the seamless navigation and engaging design that sets
      the stage for your coding adventure.

    </p>
  </Section>
);

export default AboutText;
