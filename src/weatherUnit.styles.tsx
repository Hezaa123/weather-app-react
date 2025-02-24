import styled from "styled-components";
import { rem } from "polished";

const WeatherUnitLink = styled.a`
  border-radius: 4px;
  color: #000000;
  font-size: ${rem(20)};
  font-weight: 700;
  opacity: 0.7;
  padding: 0px 8px 0px 8px;
  transition: all 200ms ease-in-out;
  text-decoration: none;

  &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
        opacity: 1;
        text-decoration: none;
    }
`;

export { WeatherUnitLink };