const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const repassword = document.getElementById('re-password')

function setErrorFor (input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')
  // thêm thông báo lỗi bên trong small
  small.innerText = message
  // thêm lỗi class
  formControl.className = 'form-floating error '
}

function setSuccessFor (input) {
  const formControl = input.parentElement
  formControl.className = 'form-floating success'
}

function checkInput () {
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const repasswordValue = repassword.value.trim()
  if (emailValue === '') {
    setErrorFor(email, 'Email đăng nhập không được để trống')
  } else {
    setSuccessFor(email)
  }
  if (passwordValue === '') {
    setErrorFor(password, 'Mật khẩu không được để trống')
  } else {
    setSuccessFor(password)
  }
  if (repasswordValue === '') {
    setErrorFor(repassword, 'Mật khẩu không được để trống')
  } else if (repasswordValue !== passwordValue) {
    setErrorFor(repassword, 'Mật khẩu không trùng khớp')
  } else {
    setSuccessFor(repassword)
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInput()
})
