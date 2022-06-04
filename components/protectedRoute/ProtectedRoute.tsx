import {useAuth} from '../../contexts/Auth'
import React, {useEffect} from 'react'

import {useRouter} from "next/router"

const ProtectedRoute = (props: any) => {
    const {
        user: {loggedIn},
    } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loggedIn) {
            router.push("/")
        }
    }, [loggedIn,router])

    return (
        <React.Fragment>
            {loggedIn === true ? props.Component : <></>}
        </React.Fragment>
    )
}

export default ProtectedRoute
