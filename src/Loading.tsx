import * as React from 'react';

export interface LoadingProps {
  style?: React.CSSProperties;
}

export default class Loading extends React.PureComponent<LoadingProps, any> {

  render() {
    let cls = 'circle-loading';
    return (
      <div className="loading-wrap" style={this.props.style}>
        <div className={cls}>
        </div>
      </div>
    );
  }
}
