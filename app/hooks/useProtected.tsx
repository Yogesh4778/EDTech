import { redirect } from  "next/navigation"
import userAuth from "./userAuth" 
import React from "react"

interface ProtectedProps{
    children: React.ReactNode;
}

export default function Protected({children}: ProtectedProps){
    const isAuthenticated = userAuth();

    return isAuthenticated ? children : redirect("/");
}

//when you write '/profile' without login then it will redirect you to the home page