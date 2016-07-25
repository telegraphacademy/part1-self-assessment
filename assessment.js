console.log('Let\'s start Hacking!');

var str ='Javascript is super duper awesome'

 var myProfileObject = {};

 var javaScriptArray = ['J', 'a', 'v', 'a'];

 //console.log(str[4]);
 //declaring the variable to use in the loops
var i = 0;
//using the for loop to print letters
 for(i = 0;i<str.length;i++){
 	//console.log(str[i]);
 };
while(i<str.length){
	//using the while loop to print letters in the string
	console.log(str[i]);
	/*we make sure to increment the value of i
	in order to get a false value for the loop
	to stop*/
	i++
}

//using bracket notation to add key and value pairs to the object
myProfileObject['school'] = 'Telegraph Prep';
myProfileObject['location'] = 'Berkeley, California';
//using dot notation
myProfileObject.name = 'Maurice Okumu';

//console.log( myProfileObject);

var myFunc = function(name,obj){
	//assigning properties to the object using dot.notation
	obj.firstName = name;
	obj.lastName = 'Okumu';
	obj.name = obj.firstName +' '+obj.lastName;
	obj.birthPlace = 'Nairobi, Kenya';
	obj.hobby = 'Coding,hacking'
	obj.sayName = function(){
		/*this will only be run in this scope so in order to
		access this function we must return it outside of 
		this scope*/
		return 'My first name is '+obj.firstName+' and my last name is '+obj.lastName;
	}();
	/*making sure the user will get the object to use 
	in the global scope*/
	return obj;

};

var checkName = function(name){
var test = myFunc('Maurice',{});
//console.log(test.name);
//check for the truthy value of the parameter
	if(test.name === name){
		//if it passes
		return true;
	}
	//all other times...
	return false;
};
//var int  = checkName('Maurice Okumu');

//console.log(int);

var checkLength = function(obj){
	/*we expressly know we will be dealing with objects
	So we can call th Object.keys method on the passed parameter*/
	return Object.keys(obj).length;
}
//console.log(checkLength({one:1,two:2,three:3}))
var tojavaScriptArray = function(){
	//joining the two arrays using the native concat method
	return javaScriptArray.concat('Script'.split(''));
}
//console.log(tojavaScriptArray());
var returnNewArray = function(arr){
	//we want to return the value inside an array
	//we embed the returned value directly inside the array
	return [arr.concat('Script'.split('')).join('')];
}

//console.log(returnNewArray(javaScriptArray));


