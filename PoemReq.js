import { useParams } from "react-router-dom";
import poemArray from '../Simdatabase'

const PoemReq = () =>{
const {id} = useParams()
let poem =poemArray.at(id-1).poem
const poemLines = poem.split('\n');
console.log(poemLines)
    return(
      <div className="poemReq" >
          {poemLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <br />
      <div >Authored in the month of {poemArray.at(id-1).date}</div>
      <div>By:{poemArray.at(id-1).author}</div>
      
      </div>  
      
    );
}

export default PoemReq;