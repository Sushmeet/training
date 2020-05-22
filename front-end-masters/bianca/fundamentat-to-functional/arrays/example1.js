const who = []

who.name = 'Sushi'
console.log('who---', who) // who--- [ name: 'Sushi' ]

who[1] = 'labby'

console.log('who---', who) // [ <1 empty item>, 'labby', name: 'Sushi' ]


let suspect = who.name
console.log('suspect---', suspect)
who.name = 'bomba'

console.log('undefined ', who.gobi)
