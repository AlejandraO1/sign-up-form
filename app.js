function checkPassword() {
  const password = document.querySelector(`input[name=password]`);
  const confirm = document.querySelector(`input[name=confirm-password]`);
  if (password.value != confirm.value) {
    document.getElementById(`message`).style.color = `#c41e3a`;
    document.getElementById(`message`).innerHTML = `Passwords do not match`;
    return false;
  }
  return true;
}
