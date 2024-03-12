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
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  border: none;
  border-block: 2px solid #2F394C;
  color: #b2bacd;
  `;

const FormButton = styled.button`
  display: block;
  width: 100%;
  padding: 23px;
  border: 0;
  text-align: center;
  font: inherit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: #b2bacd;
  background-color: transparent;
  cursor: pointer;
  `;

const LoginForm = () => (
  <form action="/" method="POST">
    <FormHeader>Enter your name or nickname</FormHeader>
    <label htmlFor="nickname" className="visually-hidden">Your nickname:</label>
    <FormField type="text" id="nickname" value="" placeholder="My name or nickname" />
    <FormButton type="submit">START GAME</FormButton>
  </form>
);

export default LoginForm;
