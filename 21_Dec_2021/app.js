
console.log("Create Object with using new keyword with one function");

console.log("============Object1=================")
// 1 Object creation by using new keyword

var laptop=new Object();

laptop.make="Dell";
laptop.cost=400000;
laptop.processpr="Intel",
laptop.ram=8,
laptop.getData=function(){
    return this.make+" "+this.cost+' '+this.processpr+' '+this.ram;
}

console.log(laptop.make);
console.log(laptop.cost);
console.log(laptop.processpr);
console.log(laptop.ram);
// console.log(laptop)
console.log(laptop.getData());

console.log("==========Object2===============")
// 2 Object creation by using new keyword
var student=new Object();
student.sname="Abhishek",
student.sclass=9,
student.sgender="Male",
student.smarks=87,
student.Detail=function()
        {
          return this.sname+",studying in  "+this.sclass +" standard,he is  "+this.sgender+'Student & got '+this.smarks +" marks ";
         }


         console.log(`Stdent Name is ${ student.sname}`);
         console.log(`Student studying in ${student.sclass} Class `);
         console.log(`Student Gender is ${student.sgender}`);
         console.log(`Student marks is ${student.smarks}`);
         console.log(`Student details is ${student.Detail()}`);

console.log("==============Object3===========");

// 3 Object creation by using new keyword


var employee=new Object();
employee.ename="Rohith Shetty";
employee.edept="Development";
employee.esalary=30000;
employee.eskill="Js";
employee.ecompany="TE",
employee.getEmpData=function(){
    return this.ename+" from "+this.edept+" ,his salary is  "+this.esalary+
        ' with highly skilled in '+this.eskill+"  working in "+this.ecompany+" Company";
}

console.log(employee.ename);
console.log(employee.edept);
console.log(employee.esalary);
console.log(employee.eskill);
console.log(employee.ecompany);
console.log(employee.getEmpData());

console.log("===========Object4==============");

// 4 Object creation by using new keyword


var car=new Object();
car.make="TATA";
car.cost=40000;
car.series="Altroz";
car.fuel="Petrol";
car.Details=function()
    {
        return this.make +" ,"+this.cost+" ,"+this.series+" ,"+this.fuel;
    }

console.log(car.make);
console.log(car.cost);
console.log(car.series);
console.log(car.fuel);
console.log(car.Details());

// 5 Object creation by using new keyword


console.log("==========Object5===============");

var s=new Object();
s.name="John";
s.age=34;
s.marks={
    science:67,
    math:75,
};
s.sData=function(){
    return this.name+" "+this.age+" "+this.marks.science+" "+this.marks.math; 
}

console.log(s.name);
console.log(s.age);
console.log(s.marks.science);
console.log(s.marks.science);
console.log(s.marks.math);
console.log(s.sData());

// Create 5 objects without using new keyword with one function

// var student=[
//     S1={
//         sname:"Abhishek", 
//         sclass:9, 
//         sgender:'Male'
//         ,smarks:85
//     },
//     S2={
//         sname:"Srajan", 
//         sclass:7, 
//         sgender:'Male'
//         ,smarks:92
//     },
//     S3={
//         sname:"Hitha", 
//         sclass:5, 
//         sgender:'Female'
//         ,smarks:75
//     },
//     S4={
//         sname:"Yashas", 
//         sclass:5, 
//         sgender:'Male'
//         ,smarks:55
//     },
//     S5={
//         sname:"Thanish", 
//         sclass:4, 
//         sgender:'Male'
//         ,smarks:64
//     }

// ]

// console.log(student);
// console.log(student[0]);
// console.log(student[1]);
// console.log(student[2]);
// console.log(student[3]);
// console.log(student[4]);


// for(var s of student){
// console.log(s.sname);
// console.log(s.sgender);
// console.log(s.smarks);
// console.log(s.sclass);

// }

