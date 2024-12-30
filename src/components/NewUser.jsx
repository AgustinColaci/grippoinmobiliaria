'use client'
import { useRouter } from 'next/navigation';
import '../css/login.css'
import '../css/loader.css'

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { auth } from '@/lib/firebase';


const NewUser = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push('/autogestion');
        } catch (err) {
            setError("Correo o contraseña incorrectos");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
        {isLoading && <div className='loading'>
            <p>Creando usuario</p>
            <div className="loader"></div>
          </div>}
        <form onSubmit={handleSubmit} className="">
            <h1 className="login-title">Nuevo usuario</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Ingrese su correo"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder="Ingrese su contraseña"
                />
            </div>
            <button type="submit" className="login-button">Crear nuevo usuario</button>
            <div className="volver">
                <Link className="link" href="/">Volver al sitio</Link>
            </div>
        </form>
        </>

    )
}

export default NewUser