

console.log("Crating Arrays without using new Keyword with all primitive and ref data types ")

console.log("========Array1 ============")
    var arr1=[123 ,"Red",true,143,

mobile={
make:"Redme",
series:7
}

];
console.log(arr1);
for (var i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

console.log(mobile.make);
console.log(mobile.series);

console.log("========Array2============")
var arr2=[36 ,"Towel",false,420,

pen={
make:"Nataraj",
color:"Black",
price:5
}
];
console.log(arr2);
for (var i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}
console.log(pen.make);
console.log(pen.color);
console.log(pen.price);

console.log("========Array3============")

arr3=["Dinga",true,675.99,


person={
    name:"Adi",
    age:25
}


];
console.log(arr3);

for (var i=0;i<arr3.length;i++){
    console.log(arr3[i]);
}
console.log(person.name);
console.log(person.age);

console.log("========Array4============")

arr4=["Red",true,456.23,false,

shirt={
    brand:"Buffalo",
    price:1200,
    type:"Casula Shirt"
}
];

console.log(arr4);

for (var i=0;i<arr4.length;i++){
    console.log(arr4[i]);
}
console.log(shirt.brand);
console.log(shirt.price)
console.log(shirt.type);




console.log("========Array5============")


arr5=["cricket",false,981,


laptop={
    make:"Dell",
    ram:8,
}
];
console.log(arr4);
for (var i=0;i<arr5.length;i++){
    console.log(arr5[i]);
}
console.log(laptop.make);
console.log(laptop.ram);

console.log("Crating Arrays with using new Keyword with all primitive and ref data types ")


console.log("========Array1 using new keyword ============")

var arr6=new Array();

arr6[0]=123;
arr6[1]="Raj";
arr6[2]=true;
console.log(arr6);
for(var i=0;i<arr6.length;i++){
console.log(arr6[i]);
}



console.log("========Array2 using new keyword ============")

var arr7=new Array(45,"Mobile",true,{Book:"Atomic Habit",pen:"Nataraj",Charger:"Redme"},56,777);

console.log(arr7);
for (var k=0; k<arr7.length;k++){
console.log(arr7[k]);
}



console.log("========Array3 using new keyword ============")

var arr8=new Array("Sadhwin",{English:24,Hindi:23, Kannada:25},{isPassed:true,isGotJob:false},876,34,);

console.log(arr8);

for(var i=0;i<arr8.length;i++){
console.log(arr8[i]);
}



console.log("========Array4 using new keyword ============")

var arr9=new Array (12,"Rama","Krishna",{Ramayana:"Rama",MAhabharata:"Krishna"},{Chk:"Audi",Mysore:"Chethan",Hasan:"Darshan" });
console.log(arr9);

for(var i=0;i<arr9.length;i++){
console.log(arr9[i]);
}



console.log("========Array5 using new keyword ============")

var arr10=new Array({car:"Toyota",Bike:"Ola",Bus:"Volvo"},34.77,"Javascript");

console.log(arr10);

for(var i=0;i<arr10.length;i++){
console.log(arr10[i]);
}
























