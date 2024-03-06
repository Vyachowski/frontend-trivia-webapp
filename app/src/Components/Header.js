import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display: flex;
    flew-wrap: wrap;
    justify-content: space-between;
    align-content: start;
    min-height: 50px;
  `

const SoundButton = styled.button`
    display: flex;
    flew-wrap: wrap;
    justify-content: center;
    align-content: start;
    background-color: transparent;
    border: none;
    fill: #b2bacd;
  `

const Menu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0;
    list-style-type: none;
  `;

const MenuLink = styled.a`
    display: block;
    font-size: 20px;
    font-weight: 600;
    color: inherit;
    text-transform: uppercase;
    text-decoration: none;
  `;

const Header = () => (
  <HeaderWrapper>
    <nav>
      <Menu>
        <li>
          <MenuLink href="#about">About</MenuLink>
        </li>
        <li>
          <MenuLink href="#rules">Rules</MenuLink>
        </li>
      </Menu>
    </nav>
    <SoundButton type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20">
        <path d="M11.0498 0.0749936C10.6934 -0.0846193 10.2821 0.0217893 10.0079 0.287811L5.18218 4.99639H0.987081C0.438703 4.99639 0 5.42202 0 5.92747V14.0411C0 14.5732 0.438703 14.9722 0.987081 14.9722H5.18218L10.0353 19.7074C10.2273 19.8936 10.474 20 10.7208 20C10.8579 20 10.9402 19.9734 11.0498 19.9202C11.4063 19.7606 11.6256 19.4148 11.6256 19.0423V0.952864C11.6256 0.553832 11.4337 0.208004 11.0498 0.0749936ZM15.4643 14.0411C15.2723 14.2539 14.9982 14.3603 14.724 14.3603C14.5046 14.3603 14.2578 14.2805 14.0659 14.1209C13.6546 13.7751 13.6272 13.1632 13.9837 12.7642C16.4239 10.104 14.2304 7.52359 13.9837 7.23097C13.6272 6.83194 13.6546 6.24669 14.0659 5.90086C14.4772 5.55504 15.0804 5.58164 15.4369 5.98067C16.753 7.36398 18.4255 10.8489 15.4643 14.0411ZM18.4529 16.5683C18.261 16.7811 17.9868 16.8876 17.7126 16.8876C17.4933 16.8876 17.2465 16.8077 17.0546 16.6481C16.6433 16.3023 16.6159 15.6905 16.9723 15.2914C21.8255 10.0508 17.1642 4.88998 16.9723 4.67716C16.6159 4.27813 16.6433 3.69289 17.0546 3.32046C17.4659 2.97463 18.0691 3.00123 18.4529 3.40026C18.5078 3.48007 24.4303 10.0774 18.4529 16.5683ZM21.5513 18.4837C21.3593 18.6965 21.0852 18.8029 20.811 18.8029C20.5916 18.8029 20.3448 18.7231 20.1529 18.5635C19.7416 18.2177 19.7142 17.6058 20.0707 17.2068C22.84 14.2273 23.69 10.9021 22.5658 7.33738C21.7432 4.62396 20.0707 2.81501 20.0707 2.78841C19.7142 2.38938 19.7416 1.80413 20.1529 1.4317C20.5642 1.08588 21.1674 1.11248 21.5513 1.51151C21.6061 1.59132 29.2834 10.104 21.5513 18.4837Z"/>
      </svg>
      <span className="visually-hidden">Переключить звук</span>
    </SoundButton>
  </HeaderWrapper>
);

export default Header;
