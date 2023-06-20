import { useEffect } from "react"
import useAuth from "../../hooks/useAuth"

const Protected = () => {
    const {checkAuth,session} = useAuth()

    const protectedRoute = async () => {
        await checkAuth()
    }
    console.log(session)
   useEffect(() => {
    protectedRoute()
   }, [localStorage['session']])
   
  return (
   <></>
  )
}

export default Protected