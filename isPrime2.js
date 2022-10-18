let inputValue= 7;
let isprime=inputValue==1? false:true;  //bcoz 1 is not prime

for(let i=2;i<inputValue;i++){
  inputValue%i==0? isprime*=false :isprime*=true;
};

alert(`${inputValue} is ${isprime? 'prime':'not prime'} number`);