const user = {
    name: 'sushi',
    id: 34567,
    info: function() {
        console.log(`${this.name} ${this.id}`);
    }
}

user.info();