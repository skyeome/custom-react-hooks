import { useState, Component } from "react";

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(current => current + 1);
  const decrementItem = () => setItem(current => current - 1);
  return (
    <div className="App">
      <h1>Count {item}</h1>
      <button onClick={incrementItem}>UP</button>
      <button onClick={decrementItem}>DOWN</button>
    </div>
  );
}

class AppUgly extends Component{
  state = {
    item:1
  }
  incrementItem = () => {
    this.setState (state=>{
      return {item : state.item + 1};
    });
  }
  decrementItem = () => {
    this.setState (state=>{
      return {item : state.item - 1};
    });
  }
  render(){
    const {item} = this.state;
    return (
      <div className="App">
        <h1>Count {item}</h1>
        <button onClick={this.incrementItem}>UP</button>
        <button onClick={this.decrementItem}>DOWN</button>
      </div>
    );
  }
}

export default App;