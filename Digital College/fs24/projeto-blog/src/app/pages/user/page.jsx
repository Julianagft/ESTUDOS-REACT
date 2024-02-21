'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react";
import API from '../../services/Api'
import Link from 'next/link';

function User({}) {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')


    const[user, setUser] = useState(null); //para armazenar um único usuário;
    const[posts, setPosts] = useState([]);
    const[albums, setAlbums] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                if(id) {
                    const userResponse = await API.getUsers(id);
                    const postResponse = await API.getPosts(id);
                    const albumResponse = await API.getAlbums()

                    setUser(userResponse.data[0]); // assume que há pelo menos um usuário
                    setPosts(postResponse.data);
                    setAlbums(albumResponse.data)
                }
                
                
            } catch (error) {
                console.error("Erro ao buscar dados o usuário", error)
            }
        };
        fetchData();
    }, [id])
    
        

    return (
        <div className='user'>
            <h1>{user ? user.name : 'Usuário não encontrado'}</h1>
            <h2>Postagens:</h2> 
            <ul>
                {posts.map((postagens) => (
                    <li>
                        <h3 className='font-bold'>{postagens.title}</h3>
                        <p>{postagens.body}</p>
                    </li>
                ))}
            </ul>
            <h2>Albums:</h2>
            <ul>
                {albums.map(album => (
                    <li key={album.id}><Link href={`/pages/album?id=${album.id}`}>{album.title}</Link></li>
                ))}
            </ul>
            
        </div>
    )
}

export default User;

