// src/hooks/useLogout.jsx
"use client";
import { useAuthContext } from "./useAuthContext";
import { useBlogContext } from "./useBlogContext";
import { useRouter } from "next/navigation";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: blogDispatch } = useBlogContext();
    const router = useRouter();

    const logout = () => {
        localStorage.removeItem('asstUsr');
        dispatch({ type: "LOGOUT" });
        
        // Only clear blog context if it exists (prevents crashes on pages without it)
        if (blogDispatch) {
            blogDispatch({ type: "SET_INITIAL_BLOGS", payload: null });
        }
        
        router.push('/');
    }

    return { logout };
}