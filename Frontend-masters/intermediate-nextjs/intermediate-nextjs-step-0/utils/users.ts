import { COOKIE_NAME } from './constants'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getUserFromToken } from './authTools'
import { cache } from "react"

export const getCurrentUser = cache (async () => {
    
    const token = cookies().get(COOKIE_NAME)
    if (!token) redirect("/signin"); //Não preciso do 'return' aqui pq redirect retorna um tipo 'never', que é a mesma coisa de colocar o return;

    const user = await getUserFromToken(token);
    if (!user) redirect("/signin");

    return user;
});

// PER REQUEST MEMORIZATION