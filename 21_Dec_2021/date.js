


console.log("---------------Dispaly date ------------------------");


var dateObjVal=new Date('Sept 12 2020');
console.log(dateObjVal);
var formattedDate1=dateObjVal.toLocaleDateString('En-US',
{
    weekday:'short',
    month:'short',
    year:'numeric',
    day:'numeric'

})
// formattedDate1();
console.log(formattedDate1);