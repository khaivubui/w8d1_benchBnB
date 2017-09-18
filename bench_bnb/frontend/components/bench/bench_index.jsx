import React from 'react';

class BenchIndex extends React.Component {
  componentDidMount () {
    this.props.fetchBenches();
  }

  render () {
    const { benches } = this.props;
    if (benches) {
      return (
        <ul>
          {benches.map(bench => (
            <li>{bench.description}: {bench.lat}, {bench.lng}</li>
          ))}
        </ul>
      );
    } else {
      return <div></div>;
    }
  }
}

export default BenchIndex;
