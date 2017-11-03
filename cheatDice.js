//Program to call an array from parent function using callback function


function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  //var count = 0;								//Cleaner version
  
  var count = -1;
  return function() {
    for (var i = 0; i<list.length; i++){
    	//var roll = list[count];   //Cleaner version
    	
    	count++;
    	//return roll;							//Cleaner version
    	
    	return list[count]
    }
  }
}

var rollLoadedDie = makeLoadedDie();

/* Test Codes*/
// console.log(rollLoadedDie());  // 5
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());