var friends =['mike', 'Stacy', 'Andy','Rick'];

// using foreach to traverse the array.
friends.forEach(function(friendValueAtIndex,index,arrayofFriends){
    console.log('The friend name is ' + friendValueAtIndex + ' and the index is ' + index + ' and the array is ' + arrayofFriends);
});