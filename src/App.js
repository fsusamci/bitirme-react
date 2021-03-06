import React, { Component } from 'react';
import './App.css';
import Plot from 'react-plotly.js';
import Graph from './Graph';

class App extends Component {

  onItemSelect = (data) => {
    let point = { x: 0, y: 0, z:0};
    let pts = '';
      for(var i=0; i < data.points.length; i++){
        point['x'] = data.points[i].x;
        point['y'] = data.points[i].y;
        point['z'] = data.points[i].z;
      }
    alert(point['x']+","+point['y']+","+point['z']+" noktasına tıklandı.");
  }

  render() {
    return (
      <div className="App">
        <div class="row">
          <div class="col-sm">
            <Graph onItemSelect={this.onItemSelect}/>
          </div>
          <div class="col-sm">
            <Graph onItemSelect={this.onItemSelect}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
