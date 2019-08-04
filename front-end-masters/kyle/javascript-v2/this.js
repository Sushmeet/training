function cake (cakeType, cakeNuts) {
    console.log(`today is ${this.name} birthday and he likes ${cakeType} and also nuts type ${cakeNuts}`);
  }
  
  
  const person = {
    name: 'sushi',
  }
  
  const client = {
    name: 'jombeee',
  }
  
  cake.call(person, 'choclatecake', 'peanuts');
  cake.apply(client, ['choclatecake', 'peanuts']);