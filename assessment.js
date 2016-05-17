console.log('Let\'s start Hacking!');

//string

//print 5th letter
console.log('Javascript is super duper awesome'[4]);

// loop 
for(var i =0 ;i< 'Javascript is super duper awesome'.length; i++ ){
console.log('Javascript is super duper awesome'[i])
};

//refactor
var i =0;
while(i<'Javascript is super duper awesome'.length){
	console.log('Javascript is super duper awesome'[i]);
	i++;
}

//object
var myProfileObject = {};

// am using bracket notation to assing the new properties to the empty object.

myProfileObject['school'] = 'Telegraph Prep';
myProfileObject['locatio'] = 'Berkeley, California';
myProfileObject['name'] = "Luisa Zapata";
// console.log(myProfileObject)

function presentation(obj, name){
	//create the new object and assing fist name, last name, place of bith, hobby and the print names method
var newObj = {
	firstName: 'Luisa',
	lastName:'Zapata',
	placeOfBirth: "Bogota, Cundinamarca, Colombia",
	hobby: "photography,",
	printNames: function(){return 'My first name is ' + this.firstName + ' and my last name is ' + this.lastName},
  };
 // console.log(newObj.printNames());
  return newObj;
}

// the new function takes a name
function findName (name){
	//assing the las function to a variable
	var previousObj = presentation();
	// and check if the input name and the name in the function are the same
	if(name === previousObj.firstName || name === previousObj.firstName+ ' ' + previousObj.lastName){
		//in the predicate takes the inputh name ans compares it to just the first name OR both fist and last name, and returns true if so.
		return true;
	}
}
//create the function that takes an object as a parameter
function objLenght (obj){
	// create a count variable
var numKey = 0;
// use a for/in loop to go itirate through the obj
for(var key in obj){
	console.log(key, numKey);
	numKey++;
	//every iteration numKey increments one 
}
//by the end of the for/in loop you'll have the amount of keys in an object
return 'the object lengh is ' + numKey;
};


//Array

var javaScriptArray = ['J', 'a', 'v', 'a'];
// create the function that takes an array
function trasformArray (array){
	//take the word 'Script' ans split ir in separate caracters
	var addSript = ('Script').split('');
	for (var i = 0; i < addSript.length; i++) {
		// loop throught the script array and push each element to the original array
		array.push(addSript[i])
	}
	return array;
}
trasformArray(javaScriptArray);

function join (array){
	var newArr = [];
//use tha native function join to put together all the separante caracters and push the string to the new array
	 newArr.push(array.join(''))
	 return newArr
}

join(javaScriptArray);
