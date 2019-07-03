import React from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends React.Component{
  state = {  
    counters: [
        {id:1, value: 0},
        {id:2, value: 2},
        {id:3, value: 0},
        {id:4, value: 0}
    ]
  };

  constructor(props) {
    super(props);
    console.log('app constructor only called once when an instance of the app is created');
  }

  componentDidMount(){
    //ajax call
    console.log('app mounted');
  }
  
handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
}

handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
}

handleReset = () => {
    const counters = this.state.counters.map( c => {
        c.value = 0;
        return c;
    })
    this.setState({counters});
}

render() {
  console.log("app rendered");
  return(
    <React.Fragment>
      <NavBar 
        totalCounters={this.state.counters.filter(c => c.value > 0).length} 
      />
      <main className = "container">
        <Counters
          counters = {this.state.counters}
          onReset = {this.handleReset}
          onDelete = {this.handleDelete}
          onIncrement = {this.handleIncrement}
        />
      </main>
    </React.Fragment>
  )
}
}

export default App;
