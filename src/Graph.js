import React from 'react';
import Plot from 'react-plotly.js';

const Graph = ({onItemSelect}) => {
  return(
    <div className="card">
      <div className="card-body">
        <div class="alert alert-success" role="alert">
          3 nokta seçildi (Burası fonksiyonel değil)
        </div>
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              z: [4, 5, 2],
              type: 'scatter3d',
              mode: 'markers',
              marker: {color: 'red'},
            }
          ]}
          layout={ {width: 500, height: 500, title: 'Lazer Tarama Verisi'} }
          onClick={(data) => onItemSelect(data)}
        />
      </div>
    </div>
  );
}

export default Graph;