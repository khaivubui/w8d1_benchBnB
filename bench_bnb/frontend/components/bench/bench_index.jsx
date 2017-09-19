import React from 'react';

class BenchIndex extends React.Component {
  componentDidMount () {
    this.props.fetchBenches();
  }

  render () {
    const { benches } = this.props;
    return (
      <ul>
        {benches.map(bench => (
          <li key={bench.id}>
            {bench.description}: {bench.lat}, {bench.lng}
          </li>
        ))}
      </ul>
    );
  }
}

export default BenchIndex;
