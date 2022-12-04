//CREATING OBJECTS

var object = {
    "name": "Aamir",
    "my name": "Aamir Khurshid",
    "age": 20,
    "weight": 40,
};

//access properties 
console.log(object);

console.log(object.name); // for properties dont have any space
console.log(object["my name"]); //for properties having space in their name

//update object data

object["my name"] = "Mr. Aamir";

console.log(object["my name"]);

//add property

object.gender = "Male";
console.log(object);

//delete property from object

delete object["my name"];
console.log(object);