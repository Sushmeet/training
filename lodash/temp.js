// INcomplete crap
/*
const canCast = (state) => ({
    cast: (spell) => {
        console.log(`${state.name} casts ${spell}!`);
        state.mana--;
    }
})

const canFight = (state) => ({
    fight: () => {
        console.log(`${state.name} slashes at the foe!`);
        state.stamina--;
    }
})

const fighter = (name) => {
  let state = {
    name,
    health: 100,
    stamina: 100
  }
  
  return Object.assign(state, canFight(state));
}

const mage = (name) => {
  let state = {
    name,
    health: 100,
    mana: 100
  }
  
  return Object.assign(state, canCast(state));
}
scorcher = mage('Scorcher')
scorcher.cast('fireball');    // Scorcher casts fireball!
console.log(scorcher.mana)    // 99

slasher = fighter('Slasher')
slasher.fight();              // Slasher slashes at the foe!
console.log(slasher.stamina)  // 99
view rawobject-composition.js hosted with ❤ by GitHub
*/

let state = {
    name: 'charle',
    health: 100,
    stamina: 100
  }

const canCast = (state) => ({
    id: 343,
    cast: (spell) => {
        console.log(`${state.name} casts ${spell}!`);
        state.mana--;
    }
    //console.log(cast)
})





const val = canCast(state)
console.log(val);