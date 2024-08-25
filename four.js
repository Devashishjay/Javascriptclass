//------------------------------- Arrays-------------------------------------------------------

// collection of items are called Arrays
//Arrays information ko store karane ka ek linear tarika hota h
//linear kehne ka matlab hai hm array ko jb v image karenge ek single line m imagine karenge
//jaise ek lamba box h row wise usme hm information store kara rhe
//        _ _ _ _ _ _ _ _ __
//       |5_|_8_|_9_|_6|_7|9|      aisa kuch box imagine karta h
// arrays m index matter karta hai(position)
//Example of marks array
//let marks=[96,75,48,88,55]
//here 96,75,48,88,55 are items of array
//Arrays k andar hm different types k information store kr sakte hai jaise string,number,boolean
//lenkin generally same typ k array he bnana jaise string bna rhe ho toh khali string daalna array m

// Example=

// let num=[1,45,89,809,44,22];
// console.log(num);
// console.log(num.length);

// Example2=

// let heros=["papa","mummy","didi","hum"];
// console.log(heros);

// output=saara names aa ja rha h lekin sath m legth v aa rha h keys jaisa dikh rha h length aur 
//         values jaisa dikh rha h heros ka naam.upar v same aisa he output dikh rha h


//------------------------------ Array indices

// arr[0],arr[1],arr[2].....

//         ____________________
//         |___|___|____|_____|
//           0   1   2     3          -> these are index

// If i want to acess the value of index 2 i wil write arr[2], then we will get the value

// Example=
// marks=[56,87,90,89,70];
// console.log(marks);

// output= output m ja k marks[3] toh 89 marks aa jayega,jo ki index 3 mai h 
// Agar koi index ka marks change karna h toh wo v ja k output m kr sakte 
// Suppose index[1] wala jo marks h 87 usko change kr k 98 krna h toh kr lenge dekjye hai
// bss output m ja k marks[1]=98   marks m automatic changes aa jayega output m dekh sakte ho

// lekin ye chij string m nii hoga hm string ka koi letter ko change ya replace ni kr sakrte kuki 
// string immutable hota hai
// Jb ki array mutable hota hai uska values m changes la sakte hai 

//---------------------------------------------- Looping over an Array

// for loop 
// important bat array length = last index+1
// example       _____________________________
//              |_1_|_2__|_3__|__4__|_5__|_6__|
//                0   1     2    3     4    5

// Here array length is 6
// Index ki value hamesha less then length hoti 

// Example of printing array using for loop 

// let heros=["deva","Laddua", "Anmolwa","Ayushwa"];
// for(let i=0; i<heros.length;i++)
// {
//  console.log(heros[i]);
// }

//Example of using (for of) and (for in)

//for of

// let heros=["ironman","batman","spiderman","Doramon"];
// for(let hero of heros){
//     console.log(hero);
// }
//output=
//ironman
//batman
//spiderman
//Doramon
 

// Example2

// cities=["Gujrat","Sahibganj","patna","bhagalpur"];
// for(let city of cities){
//     console.log(city)
// }

// output=
// Gujrat
// Sahibganj
// Patna 
// bhagalpur

// Example=if you want to print it in upper case

//  let cities=["Gujrat","Sahibganj","patna","bhagalpur"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// output=saara kuch upar jaisa he print hua lekin upper case m

// Question= For a given array with marks of students->[85,97,44,37,76,60]
//            .Find the average marks of the entire class.

// Hint-To calculate the average of marks here,we have to do the sum of marks in array and then divides it 
//      by total number of marks.like sum/6=average

// solution

// let scores=[85,97,44,37,76,60];
//  let sum=0;
//  for (let score of scores ){
//     sum+=score;
//  }
//  let avg=sum/scores.length;
//  console.log(avg);

//  output=66.5

//Question= For a given array with prices of 5 items->[250,645,300,900,50]
//          .All items have an offer of 10% OFF on them.Change the array to store final price after
//           applying offer.

//hint-offer=value/10 (means 900 pe offer apply kr rhe h toh 900/10=90)
//value=value-offer (means 900-90=810)means 900 ka 10% = 810 
// We will do it using for loop

// let items=[250,645,300,900,50];
// for(i=0;i<items.length;i++){
//     let offer= items[i]/10;
//     items[i]=items[i]-offer;
// }
// console.log(items);

// output=sb ka 10 percent print hp gya

//-------------------------------------------Array method

//  Push(): add to end          // last m kuch add krna chahte ho toh kr sakte

// Pop(): delete from end & return

// toString(): converts array to string

//concat(): joins multiple arrays and return result.

//unshift(): add to start ye push k jaisa kaam krta h,kisi v element k start m add karne ka kaam aata h

// shift(): Delete from start and return,ye pop k jaise kaam karta hai.

//slice(): returns a piece of the array.
            // slice(startidx,endidx)

//splice(): change original array(add,remove,replace)
            // splice(startidx,delcount,newEl1..)


//////////////////////////////Example of push()

// let fruits=["apple","banana","Mango","Orange"];
// output= output mai ja k fruits.push("litchi") likh k enter maar denge toh array m litchi v add ho jayega

// Example2

// let fruits=["apple","banana","Mango","Orange"];
// fruits.push("litchi");
// console.log(fruits);

// output=litchi add ho gya , aise he jitta item add karwana chahte ho karwa sakte

//////////////////////////////Example of Pop()

// let fruits=["apple","banana","Mango","Orange"];
// fruits.pop();
// console.log(fruits);

// output=simple ye karne se last wala itm delete ho jayega

//Agar deleted item ko v print karwana hai toh mtlb dikhna chiye ki ky delete hua h

// let fruits=["apple","banana","Mango","Orange"];
// let deletedItem=fruits.pop();
// console.log(fruits);
// console.log(deletedItem);

// out=deleted item find ho gya h orange dikh rha hai

///////////////////////////////Example of toString()

// let fruits=["apple","banana","Mango","Orange"];
// console.log(fruits);
// console.log(fruits.toString());

// output=apple,banana,mango,Orange 
// ye array m ni aaya h output as a string aaya h

////////////////////////////// .concat()  
//means 2 array ko add krna 
//Example=
// let super_heros=["thor","ironman","spiderman","captainamrica"];
// let heros=["salman","sarukkhan","hritik"];
// let HEROS=super_heros.concat(heros);

// console.log(HEROS)

// output=ho gya add dono ek colomn m
//aise he multiple arrays ko v add kr sakte bs coma(,) de de k add krte jayenge jaise heroes add 
//kiye h second last m wanhi coma de de k add karenge 


///////////////////////////////////////// unshift()

// let super_heros=["thor","ironman","spiderman","captainamrica"];
// super_heros.unshift("pokimion");
// console.log(super_heros);

// output=pokimon add ho gya column m

/////////////////////////////////////// shift()

// same unshift jaise process kro bss shift likh do  bracket() k andar kuch nii v daala toh first element delete ho jayega

///////////////////////////////////////// slice()

// jaisa kaam slice method string k andar karta h waise he kaam array k andar v karta hai

// jaise hm cake ki slice ko nikal lete hai,khera k slice ko nikal lete h waise he array m slice ko nikal lenge
// hm bss bta dete hai ki starting index aur index ko aur slice hmko wo value return kr k de deta

// example=  slice(startindex,endindex)

// practical example

// let super_heros=["thor","ironman","spiderman","captainamrica"];
// console.log(super_heros);
// console.log(super_heros.slice(1,3));          //3 m ruk k ek step piche le leta hai

// output=ironman aur spiderman aaya hai column wise
//agar console.log(super_heros() bracket k andar kuch ni likhe toh saara kuch print ho jayega.

////////////////////////////////////////////// splice()

//spice kaam karta hai original array ko change karne k liye
//Original array k andar kuch add karna hai kuch remove karna hai kuch replace karna hai saara kaam splice method kr k de dega 
//splice method 3 parameter leta hai means 3 values input leta hai aur ussi k basis m kaam krta hai

//Example= splice(startindex,delcount,new)
// startindex-kanha se start hona hai.
//delcount-kitne items delete krni h. 
//                _______________________________    
// Example-     |__1_|__7__|__9___|__5__|__3___|
//                 0    1      2     3     4

// sabse pehle janha se change karna hai uss index ko likhenge jaise hm 2 se change krna chahte hai
// fir hmko batana hota hai ki index 2 k baad hm kitna element ko delete krna chahte h, jaise '1'
// element ko agar delete karna hai to (2,1) likhenge toh 9 delete ho jayega,index 2 he delete ho jayega
// waise he 2 element ko delete karna hai toh (2,2) likhenge
// Example=
//  splice(2,2)
//waise he last step agar m koi new element ko add krna chahte h toh
// splice(2,2,101,708)
//toh index 2 wala element toh delete hoga he aur wanhi se naya num jo v daalo wo add ho jayega
// 1,7,101,708,3      //aisa kuch ho jayega

// Practical example=

// let arr=[1,7,9,5,3];
// arr.splice(2,2,101,708);

// output=1,7,101,708,3

// Agar hmko bss splice se element ko add karna h delete nii karna hai toh hm ky kareng

// let arr=[1,7,9,5,3];
// arr.splice(2,0,101,708)

// output=1,7,101,708,9,5,3    // mtlb '2' index pe ja k 0 element ko delete kro aur 101,708 add kr do

// agar bs delete karna hai toh (2,1)  index 2 pe ja k usko delete kr dega mtlb index 2 ka element ko delete kr dega

// Hm replace v kr sakte jaise (2,1,101) means index 2 pe ja k uske element ko delete kro aur 101 add kr do

// aur jb agar bss start kanha se hona hai wo diye jais khali 2 bracket m diye splice ka toh 2 k baad waala saara element delete ho jayega




//------------------------------------ Array Questions-------------------------------------


// Q) Create an array to store companies->"Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
//      a) Remove the first company from the array
//      b) Remove Uber and add Ola in its place
//      c) add Amazon at the end

//a) Remove the first company from the array
// let companies=["Microsoft","Uber","Google","IBM","Netflix"];
// companies.splice(0,1)

// output=uber,Google,IBM,Netflix

//b) Remove Uber and add Ola in its place
// let companies=["Microsoft","Uber","Google","IBM","Netflix"];
// companies.splice(1,1,"Ola")

// output= aa gya

// c)Add amazon at the end

let companies=["Microsoft","Uber","Google","IBM","Netflix"];
companies.splice(5,0,"amazon")









