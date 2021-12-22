console.log("Create Object without using new keyword with one function");
//1 Object with one function
var laptop={
    make:"Dell",
    ram:8,
    price:45000,
    windows10:true,
    processor:"intel",
    fullSpec:function(){
        return this.make+' '+this.ram +" "+this.price+" "+this.windows10;
    } 
}
console.log(`Make is  ${laptop.make}`);
console.log(` Ram is ${laptop.ram}`);
console.log(`Price is ${laptop.price}`);
console.log(`Is Windows Laptop ${laptop.windows10}`);
console.log(`Processor is ${laptop.processor}`);
console.log(`Full Specification of Laptop is  ${laptop.fullSpec()}`);
console.log(typeof laptop);

// 2 Object with function

var student={
        sname:"Abhishek", 
        sclass:9, 
        sgender:'Male',
        smarks:85,

        studentDetail:function(){
            return this.sname+",studying in  "+this.sclass +" standard,he is  "+this.sgender+'Student & got '+this.smarks +" marks ";
        }
    }

    console.log(`Stdent Name is ${ student.sname}`);
    console.log(`Student studying in ${student.sclass} Class `);
    console.log(`Student Gender is ${student.sgender}`);
    console.log(`Student marks is ${student.smarks}`);
    console.log(`Student details is ${student.studentDetail()}`);

//3 Object with one function
var employee={
    ename:"Rohith Shetty",
    edept:"Development",
    esalary:30000,
    eskill:"JavaScript",
    ecompany:"Techno Elevate",

    getEmpDetails:function()
    {
        return this.ename+" from "+this.edept+" ,his salary is  "+this.esalary+
        ' with highly skilled in '+this.eskill+"  working in "+this.ecompany+" Company";
    }
}
console.log(employee.ename);
console.log(employee.edept);
console.log(employee.esalary);
console.log(employee.eskill);
console.log(employee.ecompany);
console.log(employee.getEmpDetails());



//  4 Object with one function
var car=
{
    cmake:"TATA",
    ccost:400000,
    cseries:"Atroz",
    fuel:"Petrol",

    carDetails:function()
    {
        return this.cmake +" ,"+this.ccost+" ,"+this.cseries+" ,"+this.fuel;
    }
}
console.log(car.cmake);
console.log(car.ccost);
console.log(car.cseries);
console.log(car.fuel);
console.log(car.carDetails());


var person={
    name:"Dinga",
    age:34,
    phone:9854345689,
    personData:function(){
        return this.name+" "+this.age+" "+this.phone;
}
}
console.log(person['name']);
console.log(person.age);
console.log(person.phone);
console.log(person.personData());



// 5. Object witth function
const s =
 { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    },
    getDataOFStudent:function()
    {
        return this.name+" "+this.age+" "+this.marks.science+" "+this.marks.math; 
    }        
}
console.log(s.name);
console.log(s.age);
console.log(s.marks.science);
console.log(s.marks.science);
console.log(s.marks.math);
console.log(s.getDataOFStudent());






















