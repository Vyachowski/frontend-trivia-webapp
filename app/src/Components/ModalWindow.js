import styled from 'styled-components';

const ModalBackground = styled.div`
  display: none;
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

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 364px;
  min-height: 40px;
  translate: -50% -50%;
  border-radius: 10px;
  border: 2px solid #2f394c;
  background-color: #1e2633;
  `;

const ModalWindow = ({ children }) => (
  <ModalBackground>
    <ModalWrapper>
      { children }
    </ModalWrapper>
  </ModalBackground>
);

export default ModalWindow;
