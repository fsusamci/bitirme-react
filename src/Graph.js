import React from 'react';
import Plot from 'react-plotly.js';

const Graph = ({onItemSelect}) => {
  return(
    <div className="card">
      <div className="card-body">
        <div class="alert alert-success" role="alert">
          3 points selected
        </div>
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+points',
              marker: {color: 'red'},
            },
            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
          ]}
          layout={ {width: 500, height: 500, title: 'A Fancy Plot'} }
          onClick={(data) => onItemSelect(data)}
        />
      </div>
    </div>
  );
}

export default Graph;