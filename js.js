const form = document.getElementById("form-form");
const emailField = document.getElementById("email-field");
const passwordField = document.getElementById("password-field");

const userTest = "teste@gmail.com";
const passTest = "123456";

const submit = (e) => {
	e.preventDefault();

	const email = emailField.value.trim();
	const pass = passwordField.value.trim();

	if(!email){return alert("Preencha o email!");}

	if(!pass){return alert("Preencha a senha!");}

	if(email === userTest && pass === passTest){
		alert("Você logo com sucesso!");
	}else{
		alert("Senha ou email pode está incorretos!");
	}
};

const showPassword = () => {
	const prepare = passwordField.getAttribute("type") === "password" ? "text" : "password";

	passwordField.setAttribute("type",prepare);
};

form.addEventListener("submit",submit);
