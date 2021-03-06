import React from 'react'

class Button extends React.Component{
  render(){
    return(
      <div>
        <button onClick={()=>this.props.onClickFunction(this.props.incrementValue)}>
        +{this.props.incrementValue}
          </button>
      </div>
    )
  }
}

const Result = (props) => {
  return(
    <div>{props.counter}</div>
  )
}
class App extends React.Component {

state = {counter:0}

incrementCounter = (incrementValue) => {
this.setState((prevState)=>({
  counter:prevState.counter+incrementValue
}))
}
render() {
    return (
      <div> 
       <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
       <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
       <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
       <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
       
       <Result counter={this.state.counter}/>
        </div>
    );
  }
}

export default App
