import { useAuth } from '../../../hooks/useAuth'
export default function LoginPage() {
  const auth = useAuth()

  console.log("auth => ", auth);

  return (
    <div>
      Login Page
      <button onClick={() => auth.login()}>Get Login</button>
      <button onClick={() => auth.logout()}>Log out</button>
    </div>
  )
}
