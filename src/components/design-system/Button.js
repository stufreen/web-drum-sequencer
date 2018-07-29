import styled from 'styled-components';
import * as ss from 'styled-system';

const Button = styled.button`
  ${ss.color}
  ${ss.width}
  ${ss.space}
  ${ss.borders}
  ${ss.borderRadius}
  ${ss.fontWeight}
`;

Button.defaultProps = {
  border: 'none',
  p: '1rem 2rem',
  fontWeight: 'bold',
  borderRadius: '0.25rem',
  variant: 'primary',
  width: 5,
};

export { Button };
