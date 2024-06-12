import { useEffect, useState } from 'react';



const Home = () => {

    
const[text, setText] = useState('');
useEffect(()=> {
    fetch('/home.txt').then(Response => Response.text())
    .then(data => setText(data))
    .catch(error => console.error('Error fetching text'))
})



    return (
       <div className="home">
        <h1>Welcome to our Archives</h1>
        <p class="Homebody">{text}</p>
       </div>
           
      );
}
 
export default Home;
