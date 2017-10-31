import React from 'react'
import ReactDOM from 'react-dom'

// state and props. props cant be changed.
class Button extends React.Component {
    // state = { counter: 0 };

    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue)
    }
    render() {
        return (
            <div>
                <label>Button {this.props.incrementValue} </label>
                <button onClick={this.handleClick}>
                    {this.props.incrementValue}
                </button>
            </div>
        )
    }
}
// function component ( no state)
const Result = (props) => {
    return (
        <div>
            {props.counter}
        </div>
    )
}

class App extends React.Component {
    state = { counter: 1 };

    incrementCounter = (incrementValue) => {
         (this.setState((prevState,props) => {
          return { counter: prevState.counter +  incrementValue }
        })
        )
    }

    render() {
        return (
            <div>
                <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
                <Result counter={this.state.counter} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);