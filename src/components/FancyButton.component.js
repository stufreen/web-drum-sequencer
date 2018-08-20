import { variant } from 'styled-system';
import { Button } from './design-system';

const fancyButtonStyle = variant({
  key: 'fancyButtons',
});

export const FancyButton = Button.extend`
  ${fancyButtonStyle}
  transition: box-shadow 0.2s, transform 0.2s;
  outline: none;
  text-transform: uppercase;
  height: calc(100% - 4px);
  
  &:active: {
    transform: translateY(0.3em);
  }
`;
