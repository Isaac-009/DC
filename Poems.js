import {useState} from 'react';
import poemArray from '../Simdatabase'
import {Link} from "react-router-dom"



const Poems = () =>{

const [poemArray2,setPoems] = useState(poemArray)
    return(
        <div className="poemPage">
            <h2>Poems</h2>
            {poemArray2.map((poem)=>(
                <div className="poem-preview" key={poem.id}>
                    <Link to={`/poems/${poem.id}`}> 
                    {poem.Title && <h3>{poem.Title}</h3>}
                    {!poem.Title && <h3>No title given</h3>}
                    </Link>
                    <p>Written by {poem.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Poems;