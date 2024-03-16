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
      Lorem ipsum
    </p>
  </Section>
);

export default AboutText;
