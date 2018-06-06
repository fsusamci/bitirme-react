import React, { Component } from 'react';
import './App.css';
import Plot from 'react-plotly.js';
import { ToastContainer } from "react-toastr";

class App extends Component {
  render() {
    return (
      <div className="App">
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
          onClick={data => {
            var pts = '';
              for(var i=0; i < data.points.length; i++){
                  pts = 'x = '+data.points[i].x +'\ny = '+
                      data.points[i].y.toPrecision(4) + '\n\n';
              }
             alert('Closest point clicked:\n\n'+pts);
            }
          }
        />
      </div>
    );
  }
}

export default App;
