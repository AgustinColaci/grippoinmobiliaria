'use client'

import { auth } from "@/lib/firebase"
import { signOut } from "firebase/auth"

const ButtonSignOut = () => {
    const handleUser = async () => {
        await signOut(auth)
    }

    return (
        <button className="button button--logout" onClick={() => handleUser()}>Salir de mi usuario</button>

    )
}

export default ButtonSignOut