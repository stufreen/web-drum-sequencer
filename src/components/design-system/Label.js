import styled from 'styled-components';
import * as ss from 'styled-system';

const Label = styled.label`
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

Label.defaultProps = {
  m: 0,
  p: 0,
};

export { Label };
