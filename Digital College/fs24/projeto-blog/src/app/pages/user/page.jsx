'use client'

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useState, useEffect } from "react";
import API from '../../services/Api'

function user({}) {
    const router = useRouter();
    const {id} = useParams();

    const[users, setUsers] = useState([]);
    const[posts, setPosts] = useState([]);
    const[comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = searchParams.get('id'); // Obtém o ID do usuário da URL
                const userResponse = await API.getUsers();
                const postResponse = await API.getPosts(userId);
                const commentResponse = await API.getComments(postResponse.data[0]?.id); // assume que há pelo menos um post

                setUsers(userResponse.data[0]); // assume que há pelo menos um usuário
                setPosts(postResponse.data);
                setComments(commentResponse.data);
                
            } catch (error) {
                console.error("Erro ao buscar dados o usuário", error)
            }
        };
        fetchData();
    }, [])
    
        

    return (
        <div className='user'>
            <h1>{users.name}</h1>
            <ul>
                {posts.map((postagens) => (
                    <div key={postagens.id}>
                        <h2>{postagens.title}</h2>
                        <p>{postagens.body}</p>
                        <p>Quantidade de comentários: {comments.length}</p>
                    </div> 
                ))}
            </ul>
            


        </div>
    )
}

export default user;