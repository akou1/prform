// // function getcle(get_cle) {
// //   ccp = get_cle * 100;
// //   n1 = ccp % 97;
// //   n2 = 85;
// //   cle = 0;
// //   n1 + 85 > 97 ? (n2 = n1 + 85 - 97) : (n2 = n1 + 85);

// //   n2 == 97 ? (cle = n2) : (cle = 97 - n2);
// //   return cle
// // }
// // let ccpin = document.getElementById("ccpin");
// // let cl = document.getElementById("cl");

// // ccpin.onkeyup = function () {
// //   cl.innerHTML= getcle(ccpin.value)
// // };

// // calculature in js
// // let monton = document.getElementById("monton");
// // let res = document.getElementById("res");
// // let perc = document.getElementById("perc")
// // let p = document.getElementById("p")
// // let tt = document.getElementById("tt")
// // monton.onkeyup = function () {

// //   let operator = monton.value
// //   let result = eval(operator)

// //   res.innerHTML = result;

// // };
// // perc.onkeyup = function () {
// //   p.innerHTML=perc.value
// // //  fg = result * perc.value;
// // console.log(res.value)
// // tt.innerHTML = res.value;
// // }
// // let rro = document.getElementById("res")
// // let ty = document.getElementById("ty")
// // let er = document.getElementById("er")
// // let ref = document.getElementById("ref")

// // console.log(rro)
// // rro.onkeyup = function () {
// //    percentage = (100 + Number(ty.value))/100 ;
// //   console.log(percentage)
// //   console.log(rro.value*percentage)
// //   er.innerHTML = `whith per ${rro.value * percentage}  `;
// //   let perm = rro.value * percentage;
// //   erref.innerHTML = perm / ref.value;

// // }
// // ty.onkeyup  = function () {
// //     percentage = (100 + Number(ty.value)) / 100;
// //     console.log(percentage);
// //     console.log(rro.value * percentage);
// //   er.innerHTML = `whith per ${rro.value * percentage}  `;
// //   let perm = rro.value * percentage;
// //   erref.innerHTML = perm / ref.value;

// // }
// // ref.onkeyup = function () {
// //   percentage = (100 + Number(ty.value)) / 100;
// //   console.log(percentage);
// //   console.log(rro.value * percentage);
// //   er.innerHTML = `whith per ${rro.value * percentage}  `;
// //   let perm = rro.value * percentage;
// //   erref.innerHTML = perm / ref.value;
// // };

// let btn = document.getElementById("btn");
// let con = document.getElementById("con");

// btn.onclick = function () {
//   con.style.backgroundColor("red");
// };

function calculateInstallment(totalAmount, annualRate, months) {
  // حساب معامل الزيادة (مثلاً 5% تصبح 1.05)
  let markupFactor = 1 + (annualRate / 100);
  
  // إجمالي المبلغ بعد إضافة النسبة
  let totalAmountWithPercentage = totalAmount * markupFactor;

  // حساب القسط الشهري (المبلغ الإجمالي الجديد تقسيم عدد الأشهر)
  let monthlyPayment = totalAmountWithPercentage / months;

  // إرجاع النتائج كـ "كائن" (Object) لتتمكن من الوصول لكل قيمة منها
  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalWithInterest: totalAmountWithPercentage.toFixed(2)
  };
}

let total = 1000000; 
let interest = 50; 
let period = 24; 

let result = calculateInstallment(total, interest, period);

console.log("إجمالي المبلغ بعد الزيادة: " + result.totalWithInterest); // سيعطيك 1500000
console.log("القسط الشهري: " + result.monthlyPayment); // سيعطيك 62500.00