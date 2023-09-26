import { useAuth } from '../../../hooks/useAuth'
import BlankLayout from '../../../layouts/BlankLayout'

export default function LoginPage() {
  const auth = useAuth()

  return (
    <div>
      Login Page
      <button onClick={() => auth.login()}>Get Login</button>
      <button onClick={() => auth.logout()}>Log out</button>
    </div>
  )
}

LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
