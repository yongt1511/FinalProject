// yeu cau dang nhap voi cac chuc nang nhat dinh
export default function (context) {
  if (!context.store.getters.isAuthenticate) {
    context.redirect('/homepage')
  }
}
