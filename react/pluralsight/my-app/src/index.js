import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Card = (props) => {
    return (
        <div style={{ margin: '1em' }}>
            <img width='200' src={props.url} alt="some text" />
            <div style={{ display: 'inline-block', marginLeft: 10 }} >
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
                <div>{props.work}</div>
                <div className="info">Footer</div>
            </div>
        </div>
    );
}

let data = [
    {
        name: 'Sushmeet',
        work: 'ShutterStock',
        url: 'https://avatars0.githubusercontent.com/u/15717984?v=4'
    },
    {
        name: 'Rock',
        work: 'Tumblr',
        url: 'https://avatars1.githubusercontent.com/u/1565857?v=4'
    },
    {
        name: 'Robert',
        work: 'Yahoo',
        url: 'https://avatars1.githubusercontent.com/u/4034571?v=4'
    }
]

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card url={card.url} work={card.work} name={card.name} />)}
        </div>
    );
}

class Form extends React.Component {
    render() {
        return (
            <form>
            FirstName <br></br>
            <input type="text" name="firstName" id="first"/><br></br>
            SecondName<br></br>
            <input type="text" work="work" id="work_id"/> 
            </form>

        );
    }
}

ReactDOM.render(<CardList cards={data} />, document.getElementById('root'))