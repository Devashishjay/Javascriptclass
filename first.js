// console.log("Dev Ashish Jay are welcome!");
// console.log("mera ghar ka naam Jaikishan hai")

// ----------------------------------------------Variable----------------------------------------------------------------

// name="Dev Ashish";
// age=24;
// price=99.99;
// x=null;
// y=undefined;
// console.log(price); 

// output-99.99(agar name,age x ,y ye sb print karwate price k place m toh out un sb ka aata )         

// -yenha variable hai name,age,price,x,y aur values hai Dev Ashish,24,99.99,null,undefined.
// -colsole.log k andar jo v chij dalenge wo output m print hoga.
// -variables m kuch m naam use kr Sakte
// rules of variables-

// 1)case sensitive hote h means "a" and "A" dono different chij h.jaise ki "apple" and "Apple" dono different variables h
// example-
// apple="red";
// Apple="lal";
// console.log(apple);
// console.log(Apple);

// 2)only letters,underscore(_),and $ is allowed.(not even space)
// example-
// full name ="Dev Ashish";  (yenha full name k beech m jo space laga ye allowed ni h ye incorrect way h)

// fullname="Dev Ashish Jay";  (this is correct way)
// fullName_="Dev Ashish Jay"; (ye v correct way h "_" place m hm $ , ye sb sogn starting m v use kr sakte)
// fullname123="Dev Ashish Jay"; (numbers v add kr sakte h,lekin bss last m starting m variables k liye numeric value nii use kr sakte)

// 3)Reserved words cannot be variable names(means java script ki apni dictionary h aur usme kuch words ka fixed matlab h
//     for example "console" ye sb words ko as a variable use ni kr sakte (lekin console ka C capital kr de toh ni ayega error)

// mainly hm variables ko-"myName,isFollow"(aise likhte h space ni dena h toh space k baad wala letter ko capital
//      kr dete h taaki pta chale ki space hota beech m)



// output-red
//        lal

// -boolean(true/false) types values v hm apne variables m store kara sakte example
// sath he sath jo "=" sign hai usko hm assignment operator bolte h(ye sign equal to ka hai lekin equal to wala
//  kaam nii krta h.example-a=b yenha eska matlab ye h ki b a k andar ja k save ho rhi h.,right side ki value ko le ja k left side wale variable m save krta h)
// ("==") ya ("===") se hm equality ko dikhate js m

// isFollow=false;
// console.log(isFollow); 

// output-false    (agar is follow m true likh de toh output true dega)


//------------------------------------------------let, const and var(keywords)----------------------------------------------------

// Hum variables ko directly use ni krna javascript k andar,error toh ni ayega lekin ni krna h 
// example-
// age="24";
// name="Dev Ashish Jay"
// aise ni kr k aise krna h
// example-
// let name="Dev Ashish Jay" (ye let keyword h)

// example with Code 
 
// let fullName="Dev Ashish Jay";
// let age=24;
// let totalPrice=1000;
// console.log(fullName);

// let k place m "var" keyword v use kr sakte hai output same milega,lekin var purana ho gya h abi sb let use krta h..2015 se pehle 
// var use hota tha as a good programmer humko let use krna h..2015 k baad E56(ecma script 6) aaya toh ye sb add hua let aur const

// const-means constant ek baar apne ne value bol diya usko change nii kiya ja sakta h code k andar
// example-
// const age=24;

// constants maths jaise area example m ho gya "pi" jiska value 22/7 hota wo change ni hota kbi waise sb chij k liye kr sakte
//   jb v hme area calculate karna hota h hm pi jaise constrants ko use krte h

//   ex-
//   const PI=3.14;
//   console.log(PI):
//   generally constraints ko capital letters m  likha jaata h

//   let a;
//   console.log(a);
//   output-undefined  (by default koi v agar variable h aur usko value ni mila h toh wo undefined hota h hamesha) 

//   const a;
//   console.log(a)
//   output-error aa jayega agar const ko value ni diya gya toh,const ko hamesha koi value k sath likhna parega

//   Defination-
//   1)var-variable can be re-declared and updated.A global variable
//   2)Variable cannot be re-declared but can be updated.A block scope varable.
//   block scope means["{}"] curly braces,ek curly braces matlab ek block "{}" ye ek block hua
// example-
// {
//     let a=10;
//     console.log(a);
// }
// {
//     let a=4;
//     console.log(a);                   (dono a alag alag block ho gya hm ek block m ek he chij kr sakte)
// }
// output-10
//        4


// ----------------------------------------------Data types in Js---------------------------------------------------------

// Number,String,Boolean,Undefined,Null,Bigint,Symbol

// Variables k andar different types ka values(datas) rakh sakte h jo ki ye sb form m ho sakta h

// example-koi insta ka profile m alag alag tarah ka data store hoga jaise ki
// profile name-string type 
// followers-number type
// follow button-Boolean(true/false)
//   saare he profile app sb m  data type ka use hota h

// Now data type is of 2 types
// 1)Primitive-ek fix data type h koi v language k andar fix rehta h and javascript have seven primitive data types
// = number-age,price, etc 
// =String-name,etc 
// =Boolean-isFollow,etc
// =Undefined-by default saare variables undefined hote h jb tk ki usme koi values ni ho 
// =Null-
// =Bigint-bigintegers ex-
// let x=BigInt("123");
//    output-123n
//    typeOf x
//    output-bigint 
// =Symbol-bahut km use hote h


// 2)Non-Primitive-Objects(Arrays,Function) object k andar he catogories hote h array and functions
// Object is a collection of values(agar bahut saare values ko save karana hai toh uss collection ko hm object kehte)

// example-
// student record-
// name=string
// age-number
// marks-number
// ispass-boolean

// yenha jo values hai wo primitive types h lekin essi ka hm ek collection bna de toh wo object ho jayega
// aur object m key value pair store hote h(key:value)
// example-
// {
// age:24
// name:"Dev Ashish Jay"
// }
// aur ek block curly braces k andar jor k rakhte h

// example for output-

// const student={
//     fullName:"Dev ashish Jay",
//     age:24,
//     cgpa:8.2,
//     isPass:true,
// };

// output-ja k student likhna hoga toh saara chij aa jayega-fullName age sb 
// outputv m type of likhne se "object" ayega...means student ek object h means collection of values h eske andar
// name ko access krna h output m ja k student["fullName"] se naam aa jayega

// console.log(student["age"]);  output-24
// alernate 
// console.log(student.age);    output-24
// aise he koi specefic chijo ko print karwa sakte

// record m koi changes karni ho tph

// student["name"]="Dev Kumar jay";
// console.log(student["name"]);   change ho jayega naam,aur ye saara code student record k liye h change laane 
//                                   k liye upar wala console ko delete v kr sakte



// ---------------------------------------------Practise Questions-------------------------------------------------------

// 1)Question-Create a const object called "product" to store information of and flipkart item. 

const product={
    nameOfproduct:"Black Jeans",
    originalPrice:800,
    offerPrice:599,
    rating:5,
};
console.log(product);