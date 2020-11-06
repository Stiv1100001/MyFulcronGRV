export default function ({ store, redirect }) {
  if (store.state.auth.user.ruolo.length === 0) return redirect('/dashboard')
}
