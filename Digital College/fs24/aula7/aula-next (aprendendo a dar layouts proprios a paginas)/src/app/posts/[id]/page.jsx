import axios from "axios";
import Link from "next/link";


    export default async function Post({params}) {
        
        const resposta = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        const post = resposta.data;

        return (
            <ul>
                  
            <h4><Link className="font-bold" href={`/posts/${post.id}`}>{post.title}</Link></h4> 
            <p>{post.body}</p>  

            </ul>
        )
    }