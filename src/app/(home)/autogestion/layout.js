"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/login"); // Redirige si no hay usuario autenticado
      } else {
        setUser(currentUser); // Guarda el usuario autenticado
      }
      setLoading(false); // Cambia el estado de carga
    });

    return () => unsubscribe(); // Limpia el listener al desmontar el componente
  }, [router]);

  if (loading) {
    return <p>Cargando...</p>; // Muestra un indicador de carga mientras se verifica el usuario
  }

  return <>{user && children}</>; // Renderiza los hijos solo si hay un usuario
}