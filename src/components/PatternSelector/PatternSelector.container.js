import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { PatternSelectorComponent } from './PatternSelector.component';
import { patternSelectorSelectors } from './PatternSelector.selectors';
import { setPattern } from '../../common';

const mapDispatchToProps = {
  setPattern,
};

export const PatternSelector = compose(
  connect(patternSelectorSelectors, mapDispatchToProps),
  withHandlers({
    onSelectPattern: (props) => (patternIndex) => {
      const {
        setPattern: connectedSetPattern,
      } = props;
      connectedSetPattern(patternIndex);
    },
  }),
)(PatternSelectorComponent);
