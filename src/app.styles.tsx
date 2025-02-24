import styled from 'styled-components';
import { rem } from 'polished';

const AppContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-width: ${rem(480)};
  min-height: ${rem(555)};
  max-width: fit-content;
`;

const Footer = styled.footer`
    font-size: ${rem(15)};
    text-align: center;
`;
export { AppContainer, Footer}