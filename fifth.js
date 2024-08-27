//----------------------------------------- Functions in Js---------------------------------------------------------------

// Block of code that performs a specefic task,can v invoked(call) whwnever needed.(block of code hai jiske andar hm kuch command de sakte h)
// jaise jb v hmko apna car se kanhi jaana ho to driver ko bulayenge aur kaam(drive) karwayenge.
//agar hmko kbi v khana khana ho toh hm ek cook rakh lenge aur usko baar2 bula lenge jb v khane ka mnn higa toh.
//waise he mera koi block of code rahega jisko hm kuch kaam bta diye ho,aur jb v hmko wo kaam karwana hoga toh hm 
//apne code ko bula k kr lenge.
//Means jo chij hamesha repeat ho rha hai uska hm function bna lenge ek aur baar-baar use karenge.
// Ek acha developer ek he lamba chora code ko baar2 likh k coding ka length faltu m bda ni karta h wo bss hamesha ek line m likh k call kr leta h.
// Hmare pss kuch-kuch inbuilt functions hote hai pehle se 
// Example=
// console.log("hello")   // jb v ye console.log likhenge toh ye kuch v print kara dega

//"abc".toUppercase()   // ye function ko v hm baar-baar call krte hai letters ko capital karne k liye

// [1,2,3].push(4);      //  ye fuction ko kuch v add krne k liye bula sakte hai

// jo v hm input dete h function ko usko perenthasis() k andar dete h...jo v kaam dena ho usko

// How to write functions by ourself(khud se function kaise bnaya jaata hai).
// There are two ways to write functioms(functioins ko likhne ka 2 tarika hota hai)

// 1) Function Defination     (kaam ho ga ky, wo hm btate h function defination k andar)
// 2) function call           (Aur kaam karwane k liye hm function ko call karte hai)

//1) Function Defination   
// Example syntax=

// function functionName(){
//   //do some work
// }

// Like

// function functionName(parameter1,parameter2...){
// // do some work
// }

// 2) Function Call

// functionName();



// Practical example(khud k function ko bnate hai)

// function myFunction(){
//     console.log("Welcome to Dev Ashish Learning Hub");
//     console.log("We are learning Js")
// }

// myFunction(); 
// output=dono console.log upar wala line by line print ho jayega

//if you want to run your function two time then you can call your function again  without deleting previous one 
// Example=
// myFunction();
// myFunction();

// Function Defination k andar jis chij ko likh rhe hote hai usko parameter kehte hai
//Function call k andar jis chij ko likh rhe hote h usko argument kehte hai

//Question ) Create a function to calculate sum of 2 numbers.

// function sum(a,b){
//     console.log(a+b);
// }

// sum(6,9);  
// output=15  (hm chahe toh output pe v ja same ye sum likh k kuch v plus karwa SVGMaskElement)

///// Kisi v value ko without console return se v kr sakte variable m save karwa k
// Example=
// function sum(a,b){
//     s=a+b;
//     return s;                 //Return k  baad hm kuch v nii likhte apne function k andar,generally last line hoti h fn k andar
// }

// let value=sum(9,7);
// console.log(value)

// output=16

//jaise function defination m sum(a,b) agr hm function call m console.log(a) karenge toh undefined ayega
// lekin function define k andar he console.log(a) karenge toh a ka value 9 aa jayega
//mtlb ye h ki jo local variable k andar h ek box  m hai toh wo wanhi tk rahega box k bahar ja k print karana chahoge toh nii hoga 



//-------------------------------------------- Arrow Function


// Arrow function,function ko he likhne ka ek compact(chota) tarika hota hai.
//syntax example=
//const functionName=(param1,param2...)=>{
//    // do some work
// }
//Example= of normal function

// function sum(a,b){
//     return a+b;
// }
 
//Multiplication function example

// function mul(a,b){
//     return a*b;
// }

// Example of arrow Function

// const arrowSum=(a,b)=> {
//     console.log(a+b);
// }

// output= ja k khali arrowsum likh k inter  krne se 
// (a,b)=>{
//     console.log(a+b);
// }
// ye aa rha output 

// aur arrowSum(5,5);    // toh output m 10 ayega
//agar arrow function ko exicute karwana ho toh aise he karwa sakte sum multiplication kuch v khali arrowfunction output m likhne se wo function he output m de dega
 
// Question) Make a arrow function of multliplication

// const arrowMul=(a,b)=>{
//     console.log(a*b);
// }

// output=jo v num multliply karwana h paranthesis k andar likh do coma de k

// return v karwa sakte hai dekhte h dusra example m

// const arrowMul=(a,b)=>{
//     return a*b;
// };
// output-same as above

//generally arrow function ko chote function k liye use karte hai jaise ki multiply karna sum karna etc ye sb karenge
// kuch hm print v karwa sakte hai arrow function se
// Bina input k v hamara arrow function kuch kaam kr k de sakta hai
// example

// const printhello=()=>{
//     console.log("hello");
// };
// output= ja k printhello(); likhne se console.log wala hello print ho k aa jayega. 

//Alternative way kuch print karwane ka
// const printHello=()=> console.log("hello");             //single line m v kawra sakte

// lekin hm generally prefare karenge curly braces k andar he kaam karwaye



//-----------------------------------------------------  Practice questions


// Question) Create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string.
// Hint- question m diya hua h ki hm lg ko ek function bnana hai jo ki argument m string le aur uss string m kitna vowels h uska count return kr k de

// function countVowel(string){
    // let count=0;
    // for ( const char of string){
    //     if(char==="a"|| char==="e" || char==="i" || char==="o" || char==="u"){
    //         count++;
    //     }
    // }
    // console.log(count);
// }
// ouptput=wanha countvowel("devashishjay")    likhne se 4 aa raha means mera naam m 4 vowels hai


// Question) Create a arrow function to perform same task.

// const arrowStr=(string)=>{
//     let count=0;
//     for ( const char of string){
//         if(char==="a"|| char==="e" || char==="i" || char==="o" || char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// };

// output=same as above



//--------------------------------------------------- Some methods of Array

//////////////////////////////////// forEach Loop in Arrays


//ek tarah ka loop he hai jiske andar parameter m functions ko pass karte hai
//Normally string variable number variable etc ye sb ko functions k andar parameter m pass krte the
//ye ek array method hai eska use kr k hm arrays m hr ek ekement ko print(acces)karte hai
//Eska use karne ka tarika thora different hota h

//Example=for off loop mai kaise krte the hm lg

// const fruits=["banana","kela","mango","apple","anar"];
// for (const fruit of fruits){
//     console.log(fruit);
// }
// output=sara fruits column wise print ho k aa jaata hai 

//example of forEach loop
// const fruits=["banana","kela","mango","apple","anar"];

// fruits.forEach(function(){
//     console.log("hii");            //jitna v num of fruits hai utne baar 'hii' type ho 
//                                   //jayega(array k andar jitne v elements hai utni baar iss fn ko call karega)
// })           

//extended example

// const fruits=["banana","kela","mango","apple","anar"];
// fruits.forEach(function(fruit){         //fruit k place m kuch v naam de sakte ho
//     console.log(fruit);
// })

// output= saara fruit print ho k aa gya colomn Wise 

// syntax=

// Array.forEach(function(value,index,arr){

// });

// outputs= outputs m value ka naam coma de k idx likhe ho toh kon value kon se number pe h ye v dikhega,aur arr doge toh
// sath he array v dikhega ye kbi dekhna practical kr k aise dena arr.forEach(val,idx,arr);

// Where, 
// value-It is the current value of array index.(hamesha arrray k value(element) ko display karega). 
// index-Array's index number.
// arr-it belongs to array name.

// value dena complsury hai index and arr nii v de toh koi baat nii optional h ,value dena must hai.
// ye 3 parameter hota hai

// Generally jb v hm forEach function ko krte h toh esko hm arrow function se krte hai
// Example=

// let arr=[1,3,7,9,3,7];
// arr.forEach((val)=>{
//     console.log(val);
// });

// output=1-7 tk colomn wise aaya
//agar arr k andar cities hoti toh cities k naam aate output m
//for each ko tb use krte hai jb hamare array k hr ek element k liye kuch kaam perform karana hota hai

// agar array k elements ko upper case m karana hai dekhte h example bss .toUpperCase() lagega

// ex=

// let cities=["mumbai","pune","gujrat","banglore"];
// cities.forEach((val)=>{
//     console.log(val.toUpperCase());
// });

// output-saara capital ho gya

// Important baat interviews v puch sakta hai ki heigher order method ya heigher order function js m ky hai
// answer hai "forEach Loop in Arrays" ko kehte h
//Heigher order function ya method wo function/method hote h jo dusre functions ko ya toh as a parameter le lete hai
// ya fir kisi function ko return krte hai.


// Question)   For a given array of numbers,print the square of each value using the forEach loop.

// solution

// let arr=[6,9,8,7,5,4,2,3];
// arr.forEach((val)=>{
//   console.log(val*val);    //square se jyada karna ho toh val**3
// });
// output=aa gya sb ka square colomn wise 


//////////////////////////////////////////////// Map Array Method

// forEach se kaafi similar hote hai
//Ek difference bss ye hota hai ki map hm lg ko ek new array return kr k deta hai.jo result ayega uss array se ek new array ho jayega.
//Jb ki forEach hm lg ko new array return kr k nii deta h wo kuch kaam caluclte kr k deta hai
// It creates a new array with the result of some operation.The value(callback returns) are used to form new array.

// syntax=
// arr.map(callbackFnx(value,index,array))     // eske andar v whi 3 parameter pass kr sakte hai, generally es,e v bss value use kr rhe hote hai. 

// suppose we have to print some numbers using map

// let nums=[56,98,54];
// nums.map((val)=>{
//     console.log(val);
// });

// output=num col wise print ho gya numbers

// ye toh ho gya map ko use kr k saara values print karana.
// Ab dekhte h map ko use kr k naya array kaise bna sakte hai.

// Example=
//  nums=[56,98,54];
// let newArr=nums.map((val)=>{
//     return val;                  //agar saara value ko 2 se multiply karna h toh(val*2) ,kitna ka v multiple kr sakte ho
// });

// console.log(newArr);

// output= number new array m dikha rha


///////////////////////////////////////////////////  Filter Array method

// jaise chie chante hai hm channi se aur wo filter ho k cup k andar store hoti h.
// waise he koi array hai maan lo aur hmko usme se even num bss nikalna h toh filter method bss even num return karta h.
// Defination is Creates a new array of elements that give true for a condition/filter.

// syntax=  to print all even numbers

// let newarr=arr.filter((val)=>{
//     return val%2===0;
// }) 

// Practical example=

// let arr=[1,2,3,4,5,6,7,8,9,];
// let evenArr=arr.filter((val)=>{
//     return val%2===0;                 // yhi pe print krna hota agar ki 3 se bda saara val print karao toh=(val>3)
// });
// console.log(evenArr);

// output=even numbers col wise aa gya
// note karne wala baat ye h ki original array m koi changes ni hota hai new array create hota hai jo v instruction do uske according. 


///////////////////////////////////////////////// Reduce array Method

// jaise hamare pss ek array h aur uspe operation kr k last m ek single value la de example plus kr k ,sub kr k, mul kr k etc
// sum,mul,sub,average,etc ye sb m toh bahut values hote hai lekin last m bss ek value result sb deta h apna.
// Performs some operations and reduces the array to a single value. It returns that single value.

// Example=

// let arr=[1,2,3,4];

// const output=arr.reduce((result,current)=>{
//     return result+current;
// });

// console.log(output);

// output=10

// callback k andar (previous value aur current value dena hota hai)
//privious value= "result" liye h.
// current value="currrent" liye hai
//haar baar function return kr rha hai result+current.
//starting m result first element hota  hai  aur result 2 hai(1+2).
//fir result 2 wala element bnn gya toh (3+3) ho gya
//fir 6 result aur 4 current toh output 10 aa gya.
//Reduce method m shurat hoti h 2 element k sath aur hr baar hamara result update hote rehta hai.
//previous and current ko he result aur current likha jaata hai,kuch v likh lo ayega ko k yhi kaam essiliye meaningful chij likho

// Example= find the largest number from the array.

// let arr=[5,8,9,37,89,67,45,23];
// const output=arr.reduce((previous,current)=>{
//     return previous > current ? previous : current;       // eska matlab ye hua ki previous current se bda h ky?..agar ni h toh current return kro.
// });

// console.log(output);

// output= 89   // jo largest number h wo print ho gya



//----------------------------------------------------------- Practice Questions

// Question) We are given array of marks of students.Filter out marks of the students that scored 90+.

// let marks=[36,78,98,65,90,65,96,93,80,40,91,70,99];
// let toppers=marks.filter((mark)=>{
//     return mark>90;
// });

// console.log(toppers);

// output=sara 90 se bda marks col wise print ho k aa gya

// Question)  Take a number n as input from user. Create an array of number from 1 to n. 
//use the reduce method to calculate sum of all numbers in the array.
//use the reduce method to calculate product of all numbers in the array.

// Hint=koi v num lo user se ,uss number ka array bna do jaise num4 liya user toh [1,2,3,4]

?






















