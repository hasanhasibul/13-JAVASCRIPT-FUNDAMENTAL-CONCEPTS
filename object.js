var student = {id:152,name:"jasim",phone:225522};
//get access
console.log(student.phone);
console.log(student["name"]);
var id = student["id"];
console.log(id)
//update object
var newPhone = student.phone=33333;
console.log(newPhone);
console.log(student[id]=55);
