import styled from 'styled-components';
import * as ss from 'styled-system';

const Text = styled.span`
  ${ss.color}
  ${ss.fontWeight}
  ${ss.fontSize}
  ${ss.space}
  ${ss.position}
  ${ss.left}
  ${ss.top}
  ${ss.letterSpacing}
  ${ss.height}
  display: block;
`;

Text.defaultProps = {
  m: 0,
  p: 0,
};

export { Text };
