import {useState} from 'react';
import poemArray from '../Simdatabase'
import {Link} from "react-router-dom"



const Poems = () =>{

const [poemArray2,setPoems] = useState(poemArray)
    return(
        <div className="poem">
            <h2>Poems</h2>
            {poemArray2.map((poem)=>(
                <Link to={`/poems/${poem.id}`}> 
                <div className="poem-preview" key={poem.id}>
                    
                    {poem.Title && <h3>{poem.Title}</h3>}
                    {!poem.Title && <h3>No title given</h3>}
                    
                    <p>Written by {poem.author}</p>
                </div>
                </Link>
            ))}
        </div>
    );
}

export default Poems;