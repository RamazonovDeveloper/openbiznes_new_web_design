import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../hooks/useAuth'
import authConfig from '../configs/auth'


const Home = () => {
  const auth = useAuth()
  const router = useRouter()
  console.log('index router ', router)

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (localStorage.getItem(authConfig.storageTokenKeyName) && auth.company !== null) {

      router.replace(`/home`)
    }
  }, [])

  return <h1>LOADING HOME PAGE</h1>
}

export default Home
