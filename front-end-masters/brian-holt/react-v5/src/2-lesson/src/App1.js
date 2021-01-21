import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';
import Car from './Car';
import SearchParams from './SearchParams';

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
      <Car name="honda" model="accord" />
      <SearchParams />
    </div>
  );
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
