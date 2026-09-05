// src/hooks/useLogin.jsx
"use client";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useRouter } from "next/navigation";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const router = useRouter();

    const login = async (username, password) => {
        setIsLoading(true);
        setError(null);
        
        const resp = await fetch(`/api/users/login`, {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({ name: username, password: password })
        });
        
        const json = await resp.json();
        
        if (!resp.ok) {
            setIsLoading(false);
            setError(json.error);
        } else {
            localStorage.setItem('asstUsr', JSON.stringify(json));
            dispatch({ type: "LOGIN", payload: json });
            setIsLoading(false);
            setError(null);
            router.push('/add-blogs'); // Redirect to dashboard
        }
    };

    return { login, error, isLoading };
};