import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../hooks/useAuth'
import authConfig from '../../configs/auth'

const AuthGuard = props => {
  const { children, fallback } = props
  const auth = useAuth()
  const router = useRouter()

  useEffect(
    () => {
      console.log('auth ', auth)
      if (!router.isReady) {
        return
      }
      if (
        !auth.company &&
        !window.localStorage.getItem(authConfig.storageTokenKeyName)
      ) {
          router.replace('/auth/login')
      }
    },
    [router.route]
  )

  if (auth.loading) {
    return <h1>Loading big</h1>
  }

  return <>{children}</>
}

export default AuthGuard
