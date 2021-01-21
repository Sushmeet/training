import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Spinner from './Spinner';
import SeasonsDisplay from './SeasonsDisplay';

/*
Need to get the user's physical Location
Need to determine the current month
Need to change text and styling based on the location and month.
*/

// Functional Component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log('position----', position),
//     (err) => console.log('err', err)
//   );
//   return (
//     <div>
//       <h1>Hi there</h1>
//     </div>
//   );
// };

// Equivalent Class Component.
class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     lat: null,
  //     errorMessage: null,
  //   };
  // }

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    console.log('My component was rendered to the screen');
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
        }),
      (err) =>
        this.setState({
          errorMessage: err.message,
        })
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated');
  }
  renderContent() {
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonsDisplay lat={this.state.lat} />
        </div>
      );
    }
    if (!this.state.lat && this.state.errorMessage) {
      return (
        <div>
          <h1>Error: {this.state.errorMessage}</h1>
        </div>
      );
    }

    return (
      <div>
        <Spinner message="Please accept location request" />
      </div>
    );
  }

  render() {
    return <div className="some">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
