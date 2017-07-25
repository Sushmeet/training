// array of json objects

var jsonArray = [{"name": "rony"},{"school": "elementary"},{"likes": "pizza"}];

jsonArray.forEach(function(val,index,arrayItself){
    console.log('The Propery at  ' + index + ' is ' + val + 'and array ' + arrayItself[index]);
});
