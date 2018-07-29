import styled from 'styled-components';
import * as ss from 'styled-system';

const Line = styled.div`
  ${ss.color}
  ${ss.space}
  ${ss.borderRadius}
  ${ss.width}
  ${ss.height}
  ${ss.flex}
  ${ss.display}
  ${ss.opacity}
  ${ss.position}
  ${ss.alignItems}
`;

Line.defaultProps = {
  bg: 'nearWhite',
  width: '100%',
  display: 'block',
  height: 1,
};

export { Line };
