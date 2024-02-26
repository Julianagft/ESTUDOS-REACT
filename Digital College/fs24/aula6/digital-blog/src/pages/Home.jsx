import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {


    const [posts, setPosts] = useState([])


    async function buscarPosts() {
         const resposta = await axios.get("https://jsonplaceholder.typicode.com/posts")
         setPosts(resposta.data)
    }

    useEffect(() => {
        buscarPosts() 
    }, [])
    
  return (
        <ul>
            {
                posts.map( post => 
                <li key={post.id}> 
                    <h4>
                        <Link to={`/posts${post.id}`}>{post.title}</Link>
                    </h4> 
                    <p>{post.body}</p>
                </li>)
            }
        </ul>
    );
}

export default Home
