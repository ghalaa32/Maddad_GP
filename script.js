function goParent(){
  window.location.href = "parent.html";
}

function goChild(){
  window.location.href = "child.html";
}

function showSignup(){
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "block";
}

function showLogin(){
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

function parentSignup(){
  const childName = document.getElementById("signupChildName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if(!childName || !email || !password){
    alert("فضلاً عبئي جميع الحقول");
    return;
  }

  const account = {
    childName: childName,
    email: email,
    password: password
  };

  localStorage.setItem("maddadAccount", JSON.stringify(account));
  localStorage.setItem("maddadLoggedIn", "true");

  window.location.href = "home.html";
}

function parentLogin(){
  const email = document.getElementById("parentLoginEmail").value.trim();
  const password = document.getElementById("parentLoginPassword").value.trim();

  const savedAccount = JSON.parse(localStorage.getItem("maddadAccount"));

  if(!email || !password){
    alert("فضلاً أدخلي البريد الإلكتروني وكلمة المرور");
    return;
  }

  if(!savedAccount){
    alert("لا يوجد حساب محفوظ حالياً. أنشئي حساب أولاً");
    return;
  }

  if(email === savedAccount.email && password === savedAccount.password){
    localStorage.setItem("maddadLoggedIn", "true");
    window.location.href = "home.html";
  } else {
    alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");
  }
}

function childLogin(){
  const email = document.getElementById("childLoginEmail").value.trim();
  const password = document.getElementById("childLoginPassword").value.trim();

  const savedAccount = JSON.parse(localStorage.getItem("maddadAccount"));

  if(!email || !password){
    alert("فضلاً أدخل البريد الإلكتروني وكلمة المرور");
    return;
  }

  if(!savedAccount){
    alert("لا يوجد حساب محفوظ حالياً");
    return;
  }

  if(email === savedAccount.email && password === savedAccount.password){
    alert("تم تسجيل الدخول بنجاح. لاحقًا بنربطها بصفحة الألعاب");
    // لاحقًا:
    // window.location.href = "games.html";
  } else {
    alert("بيانات الدخول غير صحيحة");
  }
}

function loadHomePage(){
  const loggedIn = localStorage.getItem("maddadLoggedIn");
  const savedAccount = JSON.parse(localStorage.getItem("maddadAccount"));

  if(loggedIn !== "true" || !savedAccount){
    window.location.href = "parent.html";
    return;
  }

  document.getElementById("welcomeMessage").textContent =
    "أهلًا ولي أمر " + savedAccount.childName;

  document.getElementById("childNameText").textContent = savedAccount.childName;
  document.getElementById("emailText").textContent = savedAccount.email;
}

function logout(){
  localStorage.removeItem("maddadLoggedIn");
  window.location.href = "index.html";
}

function startQuestionnaire(){
  alert("هنا لاحقًا بنربط صفحة الاستبيان");
}
