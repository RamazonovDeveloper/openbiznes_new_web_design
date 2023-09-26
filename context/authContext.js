import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import authConfig from '../configs/auth'
import {companyInfo} from '../repositories/api'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [company, setCompany] = useState(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      if (storedToken) {
        setCompany('data')
        setLoading(false)

        // await axios
        //   .get(authConfig.meEndpoint, {
        //     headers: {
        //       Authorization: storedToken
        //     }
        //   })
        //   .then(async response => {
        //     setLoading(false)
        //     setCompany({ ...response.data })
        //   })
        //   .catch(() => {
        //     localStorage.removeItem('userData')
        //     localStorage.removeItem('refreshToken')
        //     localStorage.removeItem('accessToken')
        //     setCompany(null)
        //     setLoading(false)
        //     if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
        //       router.replace('/login')
        //     }
        //   })
      } else {
        setLoading(false)
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    
  const handleLogin = (params, errorCallback) => {
    companyInfo(params)
        .then((ress => { console.log(ress); }))
        .catch((err => { console.log(err); }))


    // axios
    //   .post(authConfig.loginEndpoint, params)
    //   .then(async response => {
    //     params.rememberMe
    //       ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
    //       : null
    //     const returnUrl = router.query.returnUrl
    //     setUser({ ...response.data.userData })
    //     params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null
    //     const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
    //     router.replace(redirectURL)
    //   })
    //   .catch(err => {
    //     if (errorCallback) errorCallback(err)
    //   })
  }

  const handleLogout = () => {
    setCompany(null)
    window.localStorage.removeItem('companyInfo')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    window.localStorage.removeItem(authConfig.onTokenExpiration)
    // router.push('/login')
  }

  const handleRegister = async (params, errorCallback) => {
    // let companyInfo = await Company.companyInfo(params)

    // console.log('handleRegister', companyInfo)

    // return companyInfo
  }

    
  const values = {
    company,
    loading,
    setCompany,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthProvider }
