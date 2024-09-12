// ------------------------------- Events --------------------------------------------------
// Internal event handlimg

// Syntax=

// node.event = () => {
//     //handle here
// }

// Internal js aise he likhte hai arrow function ka use kr k
// aur ek baar onclick function use kr liye hai toh usko wapas se use nii
// karenge kuki wo over ride kr sakt h
// Aur aise he hm lg event ko handle krte hai aur essi ko event handling kehte hai

Internaljs.onclick = () => {
  console.log("Internaljs was clicked");
  let a = 25;
  a++;
  console.log(a);
};

let div = document.querySelector("div");
internaljs.onmouseover = () => {
  console.log("You are inside internal js div");
};

//_________________________________________ Event Object ______________________________________________

// It is a special object that has details about the event.
// Ye ek special object hoti hai jiske pass events k saari details hote hai
//like events kon se type ka event hai,ky wo mouse ka event hai ky wo keyboard ka event hai,ya pointer ka event hai.
// Uss event ka target ky hai,ky wo event div k upar occur kiya h,ky wo hamare butto k upar occur kiya hai,
// means ky target tha event ka
// Screen k upar kanha mouse ja k tap hua toh event occur kiya.

Eventobject.onclick = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
};

// console m ja k saara details dekh sakte hai jaise ki
/*target
: 
button#Eventobject  */

// event ka type click dikha rha hai
// Means saara informations event ka check kr sakte hai
// koi specefecic chij v find kr sakte hai,console,log(e.type); se type pta chal jayega aur kuch v pta krna ho toh aise v kr sakte jaise target v pta kiye hai

//----------------------------------------- Event Listeners ------------------------------------

//Inline event- Eska drawback ye tha ki html wala code bahut jyada messy aur bulky ho jaata hai.
//Internal event- eska drawback ye hai ki jo event ko ek baar use kr liye usko dobara use nii kr sakte
// kuki wo over ride kr jaata hai

// node.addEventListener(event,callback)
//yenha callback hamara ek aisa function hota hai jo dusre function m argument k tarah jaata hai,
// and events toh jaan he rhe ho onclick,dblclick,ye sb

// node.removeEventListener(event,callback)

// *Note: the callback reference should be same to remove

// Event listener ko hm as a function maan sakte hai.
// ye event ko sunta hai aur jaise event aata hai ye apna kaam ko exicute kr deta hai.
// Aur ek event k liye hm multiple event listner create kr sakte hai.

//Example=

btn1.addEventListener("click", () => {
  console.log("Eventlistner button was clicked-handler1");
});

btn1.addEventListener("click", () => {
  console.log("Eventlistner button was clicked-handler2");
});

const handler3 = () => {
  console.log("Eventlistner button was clicked-handler3");
};

btn.addEventListener("click", handler3);

// 4 times print ho k aa rha h console.log wala part,agar kisi ek handler ko remove krna h toh dekhe
// jaise ki handler 3 ko change krna hai toh usme v kuch2 changes laye h shuru m bss const aur handler3 likhe h
// matlab esko variable k tarah pass kr rhe h

btn1.removeEventListener("click", handler3);

//---------------------------------------------------------------------------------------------

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundcolor = "white";
  }

  console.log(currMode);
});
