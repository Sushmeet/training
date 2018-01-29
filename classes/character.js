class Character {
    constructor(name, health) {
        this.name = name || 'sushi';
        this.health = health || 100;
    }
};

class Fighter extends Character {
    constructor(name, health, stamina) {
        super(name, health);
        this.stamina = stamina || 100;
    }

    fight() {
        console.log(`${this.name} takes a mighty swing`)
        this.stamina--;
    }
}

class Mage extends Character {
    constructor(name, health, mana) {
        super(name, health);
        this.mana = mana || 100;
    }

    cast() {
        console.log(`${this.name} casts a fireball`)
        this.mana--;
    }
}

module.exports = {
    Character,
    Fighter,
    Mage,
}
