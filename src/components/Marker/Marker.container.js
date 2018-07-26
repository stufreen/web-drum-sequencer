import { connect } from 'react-redux'
import { compose } from 'recompose';
import { MarkerComponent } from './Marker.component';
import { markerSelectors } from './Marker.selectors';

export const Marker = compose(
  connect(markerSelectors, null),
)(MarkerComponent);
