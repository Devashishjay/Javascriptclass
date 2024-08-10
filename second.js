//---------------------------------------- Comments in Js---------------------------------------------------------

// Parts of Code which is not ececuted

// "//" This is a single line Comment

// "/*" This is a multi-line Comment.
// example-

/*My name is Dev Ashish Jay I m from Sahibganj Jharkhand
i compleated my bachlors degree in BCA from sarala Birla University
My hobbies are playing cricket and chess,
My short term goal is to get a job in a reputated company and my long 
term goal is to get a heigher post in the same company,tahts all about me thankyou.*/

//-------------------------------------------Operators in Js---------------------------------------------------------
// Used to perform some operation on data 
//    a+b 
//    here a and b are operants,and + are operator


// ############################1)Arithmetic Operators(+,-,*,/,%)


// let a=5;
// let b=8;

// console.log("a+b=")
// output-a+b=
// pura value calculation kiya hua kaise nikale..agar saaf saaf a+b lekhte without "a+b=" toh 13 aata 
// kaise pura acha way m krte h dekho upar wala console ko cmnt kr k run kara k dikhate 

// console.log("a+b=",a+b);
// output-a+b=13

// esko ek aur way m kr sakte 

// let a=5;
// let b=8;
// let c=a+b;
// console.log("a+b=",c);
// output-a+b=13(same upar wala he calculation h bss thora logic change kiye)

// aise he same baanki saara operations hoga example look--

// let a=7
// let b=9
// console.log("a=",a,("b="),b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);

// output-saara accordingly aa gya

// %---esko modulus operator bolte ye remainder ka value deta h koi v chij ko divide krne pe 

// **--esko Exponentiation bolte h ye power deta h koi v chij ka 
// example-
// let a=5;
// let b=2;
// console.log("a**b=",a**b);
// output-a**b=25  (mtlb ye a pe power b kiya means 5^2=25)

// Unary Operators  (ye v arithmetic operatr k andar he aata h)

// ye bss ek he operant ka use krta h

// It is of 2 types 
// #Increment-(a++)--eska matlab hota h a+1  
//           a=a+1--mtlb a ko 1 se bdhana h toh ++ use kr sakte
// #Decrement-(a--)--eska matlab hota h a-1
//           a=a-1--mtlb a ko ghatana h toh --use kr sakte

// example dekhte unary operator ka

// This is increment example
// let a=7;
// let b=4;

// console.log("a=",a, "& b=",b);
// a++;
// console.log("a=",a)
// output-8
// jo a++ likha hua h uspe cnfuse ni hona h uske place m hm lg apne simple language m likhte a=a+1 toh v output
// 8 he aata,toh hm lg ab modefy ho gye h purana tarika ni likh k a++ likh diye khud a=a+1 ka kaam kr diya 

// This is decrement example same as above bss decrement substraction ka kaam karega
// aise same minus k liye v use karenge kr k nii dikha rhe hm jb doubt hoga kr liyo

// a++(post increment)        a--(post decrement)
// ++a(pre increment)         --a(post decrement)


// a++ means value next line se change hogi(jaise first mai "a" hai toh a ka jo value hoga whi rahega add ni hoga 1 add next line m hoga)
// ++a means value pehle line m he change hoga 

// example-
// let a=3;
// let b=2;
// console.log("++a=", ++a);
// output-4 (means pehle he plus kr diya h)
// console.log("a++=",a++);
// output-3 (lekin eska value paane k liye add karwane k liye next line m jaana hoga dekhte)
// console.log("a=",a);
// output-4(mtlb ye next line m add kr k de rha h)

// minus m v same kaam karega


//#####################2)Assignment Operators(=,+=,*=,%=,**=)


// The  work of assignment operator is to assign valu (kisi ko variable ko value assign krna)

// a=5 (eska matlab h 5 ki value a k andar assign ho rhi h)
// left=right (right side wala value hamesha left m store hota h)

// If "+="
// a+=1-that means (a=a+1)  mtlb esko ko likhne ka short tarika a+=1 hai
// a+=4- that means (a=a+4)
// example-

// let a=5;
// let b=2;

// a+=4 //means a=a+4 output 9 ayega  (upar a=5 tha lekin niche a ka value change kr diye "a+=4" aur a print krwa rhe output 9 aaya assignment operator k help se)
// console.log("a=",a);

// essi tarike se saare asignment operator ko use kr sakte 

// a+=4 k place m (a-=4, a*=4, a/=4, a%=4, a**=4)


//################################3)Comparison Operators(==,===,!=,!==)
  
// Result m hamesha boolean value return karega

// # Equal to (==)
// # Not equal to(!=)
// # Equal to & typeof(===)
// # Not equal to & typeof(!==)
// # (>)
// # (>=)
// # (<)
// # (<=)

// Example-
// let a=5;
// let b=2;

// console.log("a==b",a==b);
// output-false

// console.log("a!=b",a!=b);
// output-true

// 2nd example-
//   let a=5;
//   let b="5"

//   console.log("a==b",a==b);
//   output-true  (string value m v number ko le lega agar "==" ka sign denge toh,mtlb ye bss value ko check krta h)

//   console.log("a===b",a===b);
//   output-false  ("===" triple equal to strictly check karta hai aur output false deta hai,"===" data type ko v check karta h)

//  maximum case mai hm "===" use karte h
//essi tarah saara symbols ko use kr lenge >, <, <=, >= etc 

//##############################Logical Operators(&&, ||, !)

// Gives result in true or false 

// Logical AND - &&
// Logical OR - ||
// Logical ! - !

// Logical AND-condition-1 and condotion-2 both should be true then the output will alse true 
// example-
// let a=5;
// let b=4;

// let cond1 = a>b;
// let cond2 = a===5;

// console.log("cond1 && cond2=",cond1 && cond2);
// output-true 

// Logical OR- at least one condition should true (2no m se koi ek v condition true hua toh output true ayega)
// example-
// let a=5;
// let b=4;

// let cond1 = a>b;
// let cond2 = b>a;

// console.log("cond1 || cond2=",cond1 || cond2);
// output-true

// Logical (!)not 
//  ye kehta hai ki koi v expression agar true de rha hoga toh ye usko false bna dega aur false wale 
//  expression ko true bna dega 
// example-
let a=5;
let b=8;

console.log("!(b>a)=",!(b>a));





















