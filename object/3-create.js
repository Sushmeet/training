/*
The Object.create() method creates a new object with the specified prototype object and properties.
*/

// const Shape = function() {
//     this.name = 'Shape 1';
// };

// const Rectangle = function() {
//     this.name = 'susgiu';
//     Shape.call(this);
// }

// Rectangle.prototype = Object.create(Shape.prototype);
// const rect = new Rectangle();


// console.log(rect);


// ------------------------------------------------------------------
// Shape super class

const Shape = () => {
    this.x = 0;
    this.y = 0;
}