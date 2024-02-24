'use client'

import { useEffect, useState } from "react";
import API from '../services/Api'
import Link from "next/link";

function Main() {

    const[users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.getUsers();
                setUsers(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários", error)
            }
        };
        fetchData();
        
    }, []);

    return (
        <main>
            <h1>Lista de Usuários</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                      <div className="mt-2.5">
                          <Link href={`/pages/user?id=${user.id}`}>{`@${user.username}`}</Link> 
                          {/* //O link permite que a página não precise recarregar, ao contrário da <a> ancora; */}
                          <h3>{user.name}</h3>
                      </div> 
                    </li>
                ))}
            </ul>
        </main>
    )

}

export default Main;