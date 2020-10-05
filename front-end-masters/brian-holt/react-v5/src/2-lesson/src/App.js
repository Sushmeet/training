import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonsDisplay from './SeasonsDisplay';

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
  constructor() {
    super();

    this.state = {
      lat: null,
      errorMessage: null,
    };

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

  render() {
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <h1>Latitude: {this.state.lat}</h1>
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
        <h1>Loading</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
