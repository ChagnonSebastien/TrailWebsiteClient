import React from 'react';

function Marker(props) {
  let radius = props.stop ? 14 : 9;
  return (
    <div style={{
      position: 'absolute',
      width: radius,
      height: radius,
      left: -radius / 2,
      top: -radius / 2,

      border: `${props.stop ? "3" : "0"}px solid #f44336`,
      borderRadius: radius,
      backgroundColor: props.stop ? "white" : "blue"
    }}>
    </div>
  );
}

export default Marker;