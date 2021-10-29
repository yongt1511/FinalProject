// giữ lại token moi lan f5
export default function (context) {
  // check client co localstorage ko
  if (process.client) {
    context.store.dispatch('initAuth', context.req)
  }
}
