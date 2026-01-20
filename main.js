function getcle(get_cle) {
  // 1. تحويل النص المدخل إلى رقم صحيح كبير لضمان الدقة
  let inputVal = BigInt(get_cle.toString().replace(/\s/g, "")); // إزالة الفراغات إن وجدت

  // 2. تطبيق الخوارزمية
  let ccp = inputVal * 100n;
  let n1 = Number(ccp % 97n);
  let n2 = 85;

  if (n1 + 85 > 97) {
    n2 = n1 + 85 - 97;
  } else {
    n2 = n1 + 85;
  }

  let cle = n2 == 97 ? 97 : 97 - n2;

  // 3. إرجاع النتيجة مع التأكد من أنها رقمين (مثلاً 05 بدل 5)
  return cle.toString().padStart(2, "0");
}

// ربط الحقول
let ccpInput = document.getElementById("ccp");
let cleInput = document.getElementById("cle");

ccpInput.onkeyup = function () {
  let val = ccpInput.value;
  if (val === "" || isNaN(val)) {
    cleInput.value = ""; // مسح النتيجة إذا كان الحقل فارغاً
    return;
  }
  cleInput.value = getcle(val);
};

// حساب التقسيط
function calculateInstallment(totalAmount, annualRate, months) {
  // حساب معامل الزيادة (مثلاً 5% تصبح 1.05)
  let markupFactor = 1 + annualRate / 100;

  // إجمالي المبلغ بعد إضافة النسبة
  let totalAmountWithPercentage = totalAmount * markupFactor;

  // حساب القسط الشهري (المبلغ الإجمالي الجديد تقسيم عدد الأشهر)
  let monthlyPayment = totalAmountWithPercentage / months;

  // إرجاع النتائج كـ "كائن" (Object) لتتمكن من الوصول لكل قيمة منها
  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalWithInterest: totalAmountWithPercentage.toFixed(2),
  };
}

let totalAmount = document.getElementById("totalAmount");
let annualRate = document.getElementById("annualRate");
let months = document.getElementById("months");
let fprice = document.getElementById("fprice");
let monthc = document.getElementById("monthc");



totalAmount.onkeyup = function () {
  // //   let operator = monton.value
  // //   let result = eval(operator)
  let valr = totalAmount.value;
  let val= eval(valr)
  fprice.innerHTML = val;
};
annualRate.onkeyup = function () {
  let annualR = annualRate.value;
  perce.innerHTML = annualR;
};
months.onkeyup = function () {
  let mon = months.value;
  monthc.innerHTML = mon;
};
let result = calculateInstallment(total, interest, period);

console.log("إجمالي المبلغ بعد الزيادة: " + result.totalWithInterest); // سيعطيك 1500000
console.log("القسط الشهري: " + result.monthlyPayment); // سيعطيك 62500.00
