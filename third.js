//---------------------------------- Loops in Js -----------------------------------------------

// Loops are used to execute a piece of code again and again

// Example=if we have to print somenthing we use 
// console.log("Dev Ashish Jay");   //It will print my name in console 1 time

// But what if when you have to print  this thing 5 times. obusly you will do this process 5 times

// console.log("Dev Ashish Jay");
// console.log("Dev Ashish Jay");
// console.log("Dev Ashish Jay");
// console.log("Dev Ashish Jay");
// console.log("Dev Ashish Jay");     //It will print my name in console 5 times

// But what if when you have to print it 1000000 times...for this only we use loop,by the help of loops
// we can print anything as many times you want and it will do it in just few second 

// In a simple word loop means doing one thing again and again

// we will see different types of loops we have in Js 

// 1) for Loop
// 2) while Loop
// 3) Infinite Loop
// 4) do-while Loop
// 5) for-of Loop 
// 6) for-in Loop



//########################################## FOR LOOP

// for(let i=1; i<=5; i++) {
//     console.log("Dev Ashish Jay");
// }

// This will print dev ashish jay 5 times.


// here= i=1 (It means we are starting from 1, it is initial state)
//       i<=5 (It means i is small and equal to 5,it shows where to end, Basically helps loop to stop)
//       i++ (This is the sign of increment,this help loop to run)


//     In other words, this three statements we use for our "for loop"

//     in general= i=1 (strating state) 
//                 i<=1 (stopping state)
//                 i++ (Updation state..how our variable "i" will update)

    
//  Example= 
//  for(let i=1; i<=200; i++)
//  {
//     console.log("mera naam Dev hai");
//  }

// yenha pe ky ho rha hai 
// Hamara loop tb tk chalte rahega jb tk i ki value less then aur equal to 20 rahe ('i<=20'). 
// jb tk (i<=20) ye value true dega tb tk loop chalte ragega. 

// means, 
// i=1 (true hai, means loop chalega)
// fir updation hoga i++ (we know that i++ is nothing, it is "i=i+1")

// means i ab 2 ho gya updation k baad aur ye v "i<=20" k range m aa rha hai,condition true means loop will run again.Hamara
// And this process will run until the statement "i<=20" ye false na ho jaye.once the condition is false the loop will stop.apply

// initilization(i=1) = ek baar kiya jata hai
// stopping condition "i<=5" =baar baar check karte h
// updation (i++) baar baar krte h 

// Question-Print 1 to 5
// for(let count=1; count<=5; count++)
// {
//     console.log("My pet name is kukdi");
// }

// question2- calculate sum of 1 to 5. 

/*let sum=0
for(let i=1; i<=5; i++)
{
    if(sum=sum+i);
}
console.log("sum=",sum)
console.log('Loop has ended')*/ 

// ye question m ho kya rha h, main sb condition m h ('sum=sum+i')

/*sum=sum+1         // 0+1=1
sum=sum+2          // 1+2=3
sum=sum+3          // 3+3=6
sum=sum+4          // 6+4=10
sum=sum+5*/        // 10+5=15

// sum=sum+i ("i" toh update ho k bdhte ja rha h jb tk stopping statement false nii ho jaye 
//           ,sath m 'sum=sum+i' pehle "0+i" means "0+1" tha fir sum "1+2" ho gya  jaise jaise 
//           "i" bdha sum v khud ko plus krte chala gya ) 




//###################################### Infinite Loop

// A Loops that never ends 

// ye loop shi nii hota hai aur eska use hm ni karenge kuki hamara system currupt ho jayega

// kuki koi v number ya value agar chalte rahega toh wo kanhi na kanhi ja k memory m store hota h 
// aur lastly memory bhar jayega


//####################################### While Loop

//ek baat yaad rakho ki loop m kisi k way m kr sakte "for loop" se v kr sakte "while loop" se v kr sakte "do while loop" se 
// v kr sakte.loping ka question hm kisi v method se solve kr sakte..jo kaam "for loop "se kr sakte wo "while" and "do while" se v kr sakte

// Example while loop= Print 1 to 10

/*let i=1;                                                //Initialication pehle hota h
while(i<=10)                                            // fir while k andar condition diya jata h
{                                                       
    console.log("i=",i);
    i++;                                                 // Updation ka kaam loop k andar he krte h
} */



// Example2= Write a program to print your name using while loop

/*let i=1;
while(i<=10)
{
    console.log("Dev ashish jay");
    i++
}  */


//######################################################## do-while Loop

// Ye while loop k jaisa he kaam karta hai bss ek chota sa difference h wo ye ki condition ko last m check krta h
// . essiliye do while loop m ek gurantte hota hai ki atleast ek baar toh run karega he karega 

//  example=

 /*let i=20;
 do{
    console.log("dev Ashish jay");
    i++;
 }
 while(i<=10);  */

 /*output mai ek baar "Dev Ashish jay" print ho k aaya 
 yenha i 20 se start hone he bole h jb ki condition ye h ki i 10 se chota hona chiye yhi khashiyat hai "do-while"
 loop la at least ek baar toh print karega he agar condition match ni kr rha h fir v .. essi k place m agar while 
 loop rehta toh kuch v nii print ho k aata kuki wanha condition pehle run hota h */

//  do-while loop m last m semicolon(;) dena must h


//####################################################### for-of Loop

// for-of loop hme string aur arry k upar loop lagane m help krte..
// agar hme string v values k upar ja ja k loop lagana hai toh uske liye for-of loop ka use karenge 
// hume na yenha pe initilization dekhna hai na updation dekhna na he hme stopping condition dekhni h yenha

/*Example=

let string= "Devashishjay";
for (let i of string)
{
    console.log("i",i);
} */

// output mai devashish colum m aaya saara letter alag alag



/*syntax=

for(let value of stringvariable)        //variable ka naam kuch v rakh sakte h aur fir string variable ko lete h agar arry variable h toh usko v le sakte
{
    //do some work
}  */



// hm apne characters k sath kuch v kr sakte hai 

// Question= calculate the length of a string using for-in loop

/*let string="Devashishjay";
let length=0;
for(let i of string)
{
    console.log("i=",i)                  // Iterator "i" ko value bolte h 
    length++;
}

console.log("string length=",length); */

// output= length last m 12 aaya usse pehle string ka saara character colum m print hua ek ek kr k


//############################################### for-in Loop

// Objects k liye use krte h esko
//esme hamara jo attrator(i) hai uske andar object k keys aa jaati h , aur baad m jb array dekhenge toh uske liye v use kr payenge

// esko use krne ka example dekhte h

/*let student={                             //"student" objecxt ha
    name: "Dev ashish jay",      
    age:24,
    cgpa: 7.5,
    isPass:true
}           

for(let i in student)
{
    console.log(i);
}  */

// output=keys aaya bss name,age,cgpa,ispass yhi sb aaya


//same example dekhte h keys and values dono output m laane k liye

// let student={                             //"student" objecxt ha
//     name: "Dev ashish jay",      
//     age:24,
//     cgpa: 7.5,
//     isPass:true
// }           

// for(let i in student)
// {
//     console.log("i=",i, "value=", student[i]);
// }

// output=keys k sath values v dih rhi h


//----------------------------------------------------Loops Questions------------------------------------------------

// Question1) Print all even numbers from 0 to 100 using loop 

/*for(let i=0; i<=100; i++)
    if(i%2===0)
{
    console.log(i);
} */


/*Question2) Create a game where you start with any random game number. Ask the user to keep gussing the game number
until the user enters correct value.*/


/*let gameNum="25";
let userNum=prompt("Guess a number dear : ");

while (userNum !==gameNum)
{
    console.log("number entered is wrong.Guess again")
}
console.log("yah! You got the number"); */

// Note- ye game Chal nii raha h mera 5000 wala laptop m chrome freez ho ja rha h..bss shi num daalne pe kaam kr rha hai 


//###################################################### Strings in Js

//# Creating string

//We can store string in double codes("") and single codes('')
//Example
/*let str="Dev Ashish Jay"
let str2= 'Jaikishan' */

// output=ja k str likhne se string ka value ayenge and str2 likhne se str2 ka value ayega

// String Length

// str.length

//esko string size v kehte

// let str="Dev Ashish Jay"

// output=str likhne se string aa jayega and str.length likhne se 14 ayega.aur ye length h Dev Ashish ka

// esme Indexing v dekh sakte h mtlb Dev Ashish Jay ka indexing v kr sakte h. aur indexing wo 0 se star hota hai 

//  let str="Dev Ashish Jay"
//  console.log(str[0])
//  console.log(str[5])
//  console.log(str[9])


//###################################### Template Literals (``)

//ye ek special type ki string hai
//jyada difference nii h string se usko double codes ("") ya single codes m rakhte the esko backticks m rakhte h(``)

// let str=`Dev Ashish Jay`
// console.log(str)

//example= using string we have to print object and the cost of that object

/*let object={
    item:"pen",
    price:10,
}  

console.log("the price of",object.item ,"is",object.price); */

// output=the price of pen is 10

//Example Using template Literals we have to print object and the cost of that object

/*let object={
    item:"pen",
    price:10,
}
console.log(`the price of the ${object.item} is ${object.price}`)   */

// output=the price of the pen is 10

// here we are using only ${} to target the object but in string we were using  (,object etc you can see in above axample)
//to target the object
//template literal is easy to write amd use


// Line break k liye \n use krte 

// example=
// console.log("dev Ashish is a goood boy \nHe he living is noida now a days")

// output=dev Ashish is a good boy 
//     he is living in noida now a days


// For tab space(\t)
// example=
// console.log("DevAshish\tJay")  //if we will print the leghth of the string 12,it will not include \t 

// output=DevAshish  Jay

//################################################## String Method

// These are build-in function to manipulate a String

//1) String.toUpperCase()

// "abcd" easko agar upper case m krna h means capital letter n karna h toh ye case ka use karenge

// let string="Dev Ashish Jay"
// console.log(string)

// output=output m ja k string.toUpperCase() ye type kr k enter press karna hoga apna naam capital m aa jayega

// koi m string ka original value direct change nii karwa sakta h kuki strings immutable hoti h jiska value change nii kiya ja sakta 

//2)string.toLowercaase

// ye v same h upper case ka wo capital kr deta h ye small kr deta hai 

// 3) string.trim()

// ye unnessay spaces ko remove karta hai for example " my     name is    dev  ashish     jay" jo v space unnessary h usko remove kr deta h 

// Example=

// let string="       Dev     Ashish   Jay"
// console.log(string)

// output= bahut space de de k aaya jaise string m h ab dusre exampe m sko shi krte hai

// Example=

// let string="       Dev Ashish Jay";
// console.log(string.trim());

// output=shuruwat ki aur last ki unnasay spaces ko remove kr deta hai beech ki spaces ko chnage nii karega 


// 4) string slice(start step stop)  //returns part of string

//Example= 

// let string="123456778"
// console.log(string.slice(1,6));

// output=(2 3 4 5 6) means last wala include ni hoga last wala se pehle wala include hoga

// essi m place m string m kuch values v ho sakte hai usme v indexing slicing same kaam karta h it will start from 0,1,2,3,4,5..

// exzample=

// let string="123456778"
// console.log(string.slice(1));

// output=23456778   //1 ko chor k sb print kara diya 


// 5) string1.concat(string2)          //means 2 string ko add karna

// Example=

/*let string1="aashtha";
let string2="greens";
let result=string1.concat(string2);

console.log(result);  */

// output=aashthagreens

// ek aur way h concat krne ka

// Example=

/*let string1="aashtha";
let string2="greens";
let result=string1+string2;

console.log(result);  */        //same upar wale k jaise output h 


//6) string.replace(searchVal,newVal)

//ye method string k andar kisi value ko search krne m kaam aata hai

// example=

/*let string= "hello"
console.log(string.replace("h","y"));  */

//output=yello  //h replace ho gya

//7) string.charAt(idx)

// Example=

let string = "IloveJs";
console.log(string.charAt(0));          //output=I































