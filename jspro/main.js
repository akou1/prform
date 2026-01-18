function getcle(get_cle) {
  ccp = get_cle * 100;
  n1 = ccp % 97;
  n2 = 85;
  cle = 0;
  n1 + 85 > 97 ? (n2 = n1 + 85 - 97) : (n2 = n1 + 85);

  n2 == 97 ? (cle = n2) : (cle = 97 - n2);
  return cle
}
let ccpin = document.getElementById("ccpin");
let cl = document.getElementById("cl");

ccpin.onkeyup = function () {
  cl.innerHTML= getcle(ccpin.value)
};

// calculature in js 
// let monton = document.getElementById("monton");
// let res = document.getElementById("res");
// let perc = document.getElementById("perc")
// let p = document.getElementById("p")
// let tt = document.getElementById("tt")
// monton.onkeyup = function () {

  
//   let operator = monton.value
//   let result = eval(operator)


//   res.innerHTML = result;

// };
// perc.onkeyup = function () {
//   p.innerHTML=perc.value
// //  fg = result * perc.value;
// console.log(res.value)
// tt.innerHTML = res.value;
// }
// let rro = document.getElementById("res")
// let ty = document.getElementById("ty")
// let er = document.getElementById("er")
// let ref = document.getElementById("ref")

// console.log(rro)
// rro.onkeyup = function () {
//    percentage = (100 + Number(ty.value))/100 ;
//   console.log(percentage)
//   console.log(rro.value*percentage)
//   er.innerHTML = `whith per ${rro.value * percentage}  `;
//   let perm = rro.value * percentage;
//   erref.innerHTML = perm / ref.value;
  
// }
// ty.onkeyup  = function () {
//     percentage = (100 + Number(ty.value)) / 100;
//     console.log(percentage);
//     console.log(rro.value * percentage);
//   er.innerHTML = `whith per ${rro.value * percentage}  `;
//   let perm = rro.value * percentage;
//   erref.innerHTML = perm / ref.value;
  
// }
// ref.onkeyup = function () {
//   percentage = (100 + Number(ty.value)) / 100;
//   console.log(percentage);
//   console.log(rro.value * percentage);
//   er.innerHTML = `whith per ${rro.value * percentage}  `;
//   let perm = rro.value * percentage;
//   erref.innerHTML = perm / ref.value;
// };

