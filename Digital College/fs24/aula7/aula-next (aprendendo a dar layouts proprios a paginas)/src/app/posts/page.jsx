import axios from "axios";
import Link from "next/link";

export default async function PostPage() {

    const resposta = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = resposta.data;
    //sem a necessidade do useState;
      
    return (
        
    <ul>
        {
            posts.map( post => <li key={post.id}> 
            <h4 className="font-bold"><Link href={`/posts/${post.id}`}>{post.title}</Link></h4> 
            <p>{post.body}</p> 
            </li>)
        }
    </ul>

    )
}