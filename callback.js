function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
      
    }
    
  }
}

function actionWhenFound(indexNumber) {

	console.log("found Waldo at :" + indexNumber);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
