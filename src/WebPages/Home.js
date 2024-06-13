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
        <img src="DcHome.jpg" alt="Picture of Dc" width="3472" height="4624"></img>
       </div>
           
      );
}
 
export default Home;
