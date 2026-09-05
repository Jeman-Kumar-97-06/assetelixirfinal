// src/hooks/useSignup.jsx
"use client";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useRouter } from "next/navigation";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const router = useRouter();

    const signup = async (name, password) => {
        setIsLoading(true);
        setError(null);
        
        const resp = await fetch(`/api/users/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, password })
        });
        
        const json = await resp.json();
        
        if (!resp.ok) {
            setIsLoading(false);
            setError(json.error);
        } else {
            localStorage.setItem('asstUsr', JSON.stringify(json));
            dispatch({ type: "LOGIN", payload: json });
            setIsLoading(false);
            router.push('/add-blog'); // Redirect to dashboard
        }
    }
    
    return { signup, error, isLoading };
}