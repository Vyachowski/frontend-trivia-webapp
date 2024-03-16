import styled from 'styled-components';
import { borderColor } from './cssVariables';

const Header = styled.h2`
  maring-bottom: 10px;
  border-bottom: 1px solid ${borderColor};
  `;

const AboutText = () => (
  <section>
    <Header>About header</Header>
    <p>
      Lorem ipsum
    </p>
  </section>
);

export default AboutText;
