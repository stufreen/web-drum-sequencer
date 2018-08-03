import { Button } from './Button';
// import theme from '../../styles/theme';

export const HoverButton = Button.extend`
  transition: all ${props => props.transitionSpeed}

  &:hover {
    color: ${props => props.theme.colors[props.hoverColor] || props.hoverColor};
    background-color: ${props => props.theme.colors[props.hoverBg] || props.hoverBg};
  }
`;
