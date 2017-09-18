import { connect } from 'react-redux';

import { fetchBenches } from '../actions/bench_actions';
import Search from './search';

const arrayBenches = ({ entities }) => (
  Object.keys(entities.benches).map(id => entities.benches[id])
);

const mapStateToProps = state => ({
  benches: arrayBenches(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
