const form = document.getElementById('form')
const username = document.getElementById('username')
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
  const usernameValue = username.value.trim()
  const passwordValue = password.value.trim()

  if (usernameValue === '') {
    setErrorFor(username, 'Tên đăng nhập không được để trống')
  } else {
    setSuccessFor(username)
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
