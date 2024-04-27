function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = { name, email, password };

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(() => {
      console.log("Signup Sucessfull");
      alert("SignUp Sucessfull, Please Login....");
    })
    .catch((err) => {
      console.log("err", err);
    });
}

async function login() {
  let lemail = document.getElementById("lemail").value;
  let lpassword = document.getElementById("lpassword").value;

  let res = await fetch("http://localhost:3000/users");
  let data = await res.json();

  let flag = false;
  data.forEach((el, i) => {
    if (el.email == lemail) {
      if (el.password == lpassword) {
        flag = true;
        localStorage.setItem("loginUser", JSON.stringify(el));
        alert("LogIn Sucessfull");
        window.location.href = "products.html";
      } else {
        alert("Wrong Password");
      }
    }
  });
  if (flag == false) {
    alert("User Not Found, Please Register");
  }
}
