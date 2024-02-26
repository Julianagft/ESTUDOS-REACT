import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {

    const [post, setPost] = useState({})

    const [erro, setErro] = useState(false)

    const searchParamas = useParams()
    const idParams = searchParamas.id

    async function buscarPosts(id) {

        try {
            const resposta = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)         
            setPost(resposta.data)
        } catch (error) {
            setErro(true)
        }


    }

    useEffect(() => { 
        buscarPosts(idParams) 
    }, [idParams])
    
  return (
        <div>
           {
           erro ? <span>Deu ruim </span> : 
            <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </>
        }
        </div>
    );
}

export default Post
