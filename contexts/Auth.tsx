import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(undefined)

const setLocalStorage = (key:any, value:any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error({ e })
  }
}

const getLocalStorage = (key:any, initialValue:any) => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : initialValue
  } catch (e) {
    return initialValue
  }
}

const AuthProvider = ({ children }:any) => {
  const [user, setUser] = useState(() =>
    getLocalStorage('user', { loggedIn: false }),
  )
  const [firstShow, setFirstShow] = useState(() =>
    getLocalStorage('firstShow',   true ),
  )
  useEffect(() => {
    setLocalStorage('user', user)
  }, [user])

  useEffect(() => {
    setLocalStorage('firstShow', firstShow)
  }, [firstShow])

  const toggleAuth = () => {
    setUser((prev:any) => ({
      ...prev,
      loggedIn: !prev.loggedIn,
    }))
  }

  const togglesFirstShow = (show:any) => {
    setFirstShow(show)
  }

  const value:any = { toggleAuth: toggleAuth, user ,togglesFirstShow:togglesFirstShow,firstShow}

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined)
    throw new Error('useAuth must be within AuthProvider!')

  return context
}

export { AuthProvider, useAuth }
