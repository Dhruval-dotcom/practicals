namew = document.getElementById("name");
namew.value = localStorage.getItem("name");

if (localStorage.getItem("gender") == "Male") {
  document.getElementById("male").checked = true;
} else {
  document.getElementById("female").checked = true;
}

document.getElementById("dob").value = localStorage.getItem("dob");

office = document.getElementById("office");
office.value = localStorage.getItem("office");

residence = document.getElementById("residence");
residence.value = localStorage.getItem("residence");

postal = document.getElementById("postal");
postal.value = localStorage.getItem("postal");

mobile = document.getElementById("mobile");
mobile.value = localStorage.getItem("mobile");

telephone = document.getElementById("telephone");
telephone.value = localStorage.getItem("telephone");

email = document.getElementById("email");
email.value = localStorage.getItem("email");

dept = localStorage.getItem("dept");
if (dept.indexOf("1") != -1) document.getElementById("php").checked = true;
if (dept.indexOf("2") != -1) document.getElementById("golang").checked = true;
if (dept.indexOf("3") != -1) document.getElementById("python").checked = true;
if (dept.indexOf("4") != -1) document.getElementById("nodejs").checked = true;
if (dept.indexOf("5") != -1) document.getElementById("react").checked = true;

document.getElementById("vehicle").value = localStorage.getItem("vehicle");

document.getElementById("deptc").value = localStorage.getItem("deptc");

aadhar = document.getElementById("aadhar");
aadhar.value = localStorage.getItem("aadhar");

vehicle_no = document.getElementById("vehicle-no");
vehicle_no.value = localStorage.getItem("vehicle_no");

bank_acc = document.getElementById("bank-acc");
bank_acc.value = localStorage.getItem("bank-acc");

debit = document.getElementById("debit");
debit.value = localStorage.getItem("debit");

passport_no = document.getElementById("passport-no");
passport_no.value = localStorage.getItem("passport-no");

col = document.getElementById("color");
col.value = localStorage.getItem("col");

ran = document.getElementById("ran");
ran.value = document.getElementById("ranval").innerHTML =
  localStorage.getItem("ran");

document.getElementById("fil").value = localStorage.getItem("fil");

gstin = document.getElementById("gstin");
gstin.value = localStorage.getItem("gstin");

dl = document.getElementById("dl");
dl.value = localStorage.getItem("dl");

account = document.getElementById("account");
account.value = localStorage.getItem("account");

credit = document.getElementById("credit");
credit.value = localStorage.getItem("credit");

pan = document.getElementById("pan");
pan.value = localStorage.getItem("pan");

document.getElementById("blood-group").value =
  localStorage.getItem("blood-group");

namew_relative = document.getElementById("name-relative");
namew_relative.value = localStorage.getItem("name-relative");

mobile_relative = document.getElementById("mobile-relative");
mobile_relative.value = localStorage.getItem("mobile-relative");

telephone_relative = document.getElementById("telephone-relative");
telephone_relative.value = localStorage.getItem("telephone-relative");

relation_relative = document.getElementById("relation-relative");
relation_relative.value = localStorage.getItem("relation-relative");
