import styled from 'styled-components';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon
} from 'react-share';

import ModalWrapper from './ModalWrapper';

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  `;
const shareLink = 'http://localhost:3000/';
const isRound = true;
const size = 50;

const DeviceWarningMessage = () => (
  <CenteredContainer>
    <ModalWrapper style={{ padding: '30px', textAlign: 'center' }}>
      <p>
        Site is available only from desktop devices for now.
      </p>
      <hr />
      <p>
        Share the link to open it from a desktop device:
      </p>
      <p style={{ display: 'flex', justifyContent: 'center', gap: '15px', }}>
        <TelegramShareButton url={shareLink}>
          <TelegramIcon size={size} round={isRound} />
        </TelegramShareButton>
        <FacebookShareButton url={shareLink}>
          <FacebookIcon size={size} round={isRound} />
        </FacebookShareButton>
        <WhatsappShareButton url={shareLink}>
          <WhatsappIcon size={size} round={isRound} />
        </WhatsappShareButton>
        <LinkedinShareButton url={shareLink}>
          <LinkedinIcon size={size} round={isRound} />
        </LinkedinShareButton>
      </p>
    </ModalWrapper>
  </CenteredContainer>
);

export default DeviceWarningMessage;
