const num1 = 60;
const num2 = 72;
let hcf;

for(let i = 1; i <= num1 && i <= num2; i++){
   if(num1 % i == 0 && num2 % i == 0){
     hcf = i;
   }
}
console.log(`The Height Common Factor of ${num1} and ${num2} is ${hcf}`);