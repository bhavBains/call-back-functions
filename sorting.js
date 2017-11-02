var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//Sort by Name
//Using if 
students.sort(function(a, b){
	var nameA = a.name.toLowerCase();
 	var nameB = b.name.toLowerCase();
 	if (nameA < nameB){
    	return -1;
 	}
 	if (nameA > nameB){
    	return 1;
 	}
 	if (nameA === nameB){
 		students.sort(function(a, b){
 		return b.age - a.age});
	}
	
});  
/* ---> trying switch statement<---

	// switch(nameA < nameB){
	// case true: return -1;
	// break;
	// case false: return 1;
	// case 0: students.sort(function(a, b){
 // 				return a.age - b.age;
	// 		});
	// break;
	// } 
});

*/
console.log(students);