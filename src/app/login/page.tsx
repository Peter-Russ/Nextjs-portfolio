"use client";
import styles from './loginPage.module.css'
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IUser } from "@/src/interfaces/IUser";

export default function loginPage() {
    const [user, setUser] = useState<IUser>({} as IUser);
    
    const onLogin = async () => {
    }

    return (
        <div>
            <h1>Login</h1>

            <label htmlFor="email"></label>
            <input 
            id="email" 
            type="email"
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />

            <label htmlFor="password"></label>
            <input 
            id="password" 
            type="password"
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="********"
            />

            <button onClick={onLogin}>
                Signup
            </button>

            <Link href="/signup">Signup instead</Link>
        </div>
    )
}
