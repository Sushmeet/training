/* this provides and elegant way of implicitly passing along
   an object reference leading to a cleaner API design and easier re-use.

*/

function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I' m " + identify.call(this);
    console.log(greeting); 
}

var me = {
    name: 'Kyle'
};

var you = {
    name: 'Reader'
};

identify.call(me); // Kyle
identify.call(you); // Reader

speak.call(me); // hello, i'm kyle
speak.call(you); // helllo, i'm reader


identify.call()
