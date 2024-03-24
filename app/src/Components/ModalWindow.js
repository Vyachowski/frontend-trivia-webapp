import styled from 'styled-components';
import ModalWrapper from './ModalWrapper';

const ModalBackground = styled.div`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #0e1521cc;
  backdrop-filter: blur(10px);
  `;

const ModalWindow = ({ children }) => (
  <ModalBackground>
    <ModalWrapper>
      { children }
    </ModalWrapper>
  </ModalBackground>
);

export default ModalWindow;
