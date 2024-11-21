// components/LoginForm.js
'use client'
import React, { useState, useEffect } from "react";
import '../css/login.css'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/autogestion');
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/autogestion');
        } catch (err) {
            setError("Correo o contraseña incorrectos");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            {isLoading ? (
                <p>Cargando...</p>
            ) : (
                <form onSubmit={handleSubmit} className="login-form">
                    <h1 className="login-title">Iniciar Sesión</h1>
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
                    <button type="submit" className="login-button">Ingresar</button>
                    <Link href="/">Volver al sitio</Link>
                </form>
            )}
        </div>
    );
};

export default LoginForm;
