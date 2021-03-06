const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

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

  if (emailValue === '') {
    setErrorFor(email, 'Tên đăng nhập không được để trống')
  } else {
    setSuccessFor(email)
  }
  if (passwordValue === '') {
    setErrorFor(password, 'Mật khẩu không được để trống')
  } else {
    setSuccessFor(password)
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInput()
})
