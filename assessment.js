console.log('Let\'s start Hacking!');
var string =  'Javascript is super duper awesome'
var myProfileObject = {};
var javaScriptArray = ['J', 'a', 'v', 'a'];

console.log(string[4]);

for(var i = 0; i < string.length; i++) {
	console.log(string[i]);
};

//3. Copy and refactor problem 2 using a while loop

myProfileObject.school = 'Telegraph Prep';
myProfileObject.location = 'Berkeley, California';
//method used is dot notation sets property name on object;
myProfileObject.name = 'Mateo'

var personObject = function(object, name) {
	 object.name = name;
	 object['place of birth'] = 'Whittier, Ca, US';
	 object.hobby = 'hiking';
	 object.printMethod = function() {
	 	var nameArray = name.split(" ");
	 	return 'My first name is ' + nameArray[0] + ' my last name is '+ nameArray[1]; 
	 }
	 return object; 
}
 var object = personObject({}, 'Mateo Balcorta');
// console.log(object); 
// console.log(object.printMethod());

var sameName = function(name) {
	if(name === object.name) {
		return true; 
	};
};
//console.log(sameName('Mateo Balcorta'))

var objectLength = function(object) {
	return object.length; 
};

// var arrayLength = objectLength([1, 2, 3, 4]);
// console.log(arrayLength)

var modifiedArray = function(array) {
var restOfArray = 'Script';
	restOfArray = restOfArray.split('');
		array = array.concat(restOfArray);
			return array;
};
var completeArray = modifiedArray(javaScriptArray);
//console.log(completeArray);

//create function that takes in an array
var condensed = function(array) {
	//join individual letters together 
  array = array.join('');
//return an array with letters joined together
    return [array];
};
//console.log(condensed(completeArray))








