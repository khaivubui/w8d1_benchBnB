import { connect } from 'react-redux';

import { fetchBenches } from '../actions/bench_actions';
import { updateBounds } from '../actions/filter_actions';
import Search from './search';

const arrayBenches = ({ entities }) => (
  Object.keys(entities.benches).map(id => entities.benches[id])
);

const mapStateToProps = state => ({
  bounds: state.ui.filter.bounds,
  benches: arrayBenches(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: bounds => dispatch(fetchBenches(bounds)),
  updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
