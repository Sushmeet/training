// functional component.
// React is api with which you communicate to react
// React-dom is to render the contents on the web browser
// react native to render the contents on the mobile device.

import React from 'react';
import ReactDOM from 'react-dom';
import Pet  from './Pet';

const App = () => {
// After with JSX
  return (
    <div>
      <h1>Adopt Me Dude99999!</h1>
      <h2>silly me dude</h2>
      <p>This is a paragraph</p>
      <Pet name="sparky" animal="dog" breed="boston terrier" />
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="jogo" animal="parrot" breed="bird" />
    </div>
  )
  //  Before JSX
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {}, 'Adopt Me!'),
  //   React.createElement('h2', {}, 'silly me dude'),
  //   React.createElement('p', {}, 'this is a paragraph'),
  //   React.createElement(Pet, {
  //     name: 'sparky',
  //     animal: 'dog',
  //     breed: 'boston terrier',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'jogo',
  //     animal: 'parrot',
  //     breed: 'bird',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'kobo',
  //     animal: 'cat',
  //     breed: 'something',
  //   }),
  // ]);
};

ReactDOM.render(<App />, document.getElementById('root'));
