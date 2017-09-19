import React from 'react';

class BenchIndex extends React.Component {
  componentDidMount () {
    console.log(this.props.bounds);
    this.props.fetchBenches(this.props.bounds);
  }

  componentDidUpdate () {
    // console.log(this.props.bounds);
    this.props.fetchBenches(this.props.bounds);
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
