// check role user
export default function (context) {
  if (context.store.state.role !== 'aOAEseP0jkYQVSbOlVuEiNnqMeI2') {
    context.redirect('/homepage')
  }
}
