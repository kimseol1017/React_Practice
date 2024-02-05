// const calculater = {
//     Calculater : function(a,b){
//         alert(a + b);
//         alert(a - b);
//         alert(a * b);
//         alert(a / b);
//         alert(a ** b);
//     },
// };
// console.log(calculater.Calculater(2,2));
const calculater = {
    Calculater : function(a,b){
        const Array = [a + b , a - b , a * b, a / b, a ** b];
        return Array;
    },
};
const CalculaterResult = calculater.Calculater(2,2);
console.log(CalculaterResult);



const age = 19;
function calculaterKrage(ageOfForeigner){
   return ageOfForeigner + 2;
}

const KrAge = calculaterKrage(age);

console.log(KrAge);

const yourAge = prompt("How old are you");
const canDrink = {
    ageCalculater : function(yourAge){
        if(yourAge < 19){
            alert("You can't Drink");
        }
        else{
            alert("You can Drink");
        }
   },
};

