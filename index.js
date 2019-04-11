import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      canEat: 'NO',
      displayCanEat : true
    };
    this.checkToEat = this.checkToEat.bind(this);
  }

  

  checkToEat(){
    var time = new Date();
    var hour = time.getHours();

    if(hour >=9 && hour <=16){ //it's configurable
      this.setState({canEat : "YES"})
    }else{
      this.setState({canEat : "NO"})
    }

  }

  render() {
    return (
      <div>
        {this.state.displayCanEat && <h1> {this.state.canEat} </h1>}
        <p>
          <button onClick={this.checkToEat}> Can i eat now? </button>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
