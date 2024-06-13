import photoArray from '../ImgRef'


const Pictures = () => {
    

    

    return(
       
    <div className="photo">
         <h2>Photos</h2>
            { photoArray.map((photo, index) => (
            <div key={index} className="photo-view" dangerouslySetInnerHTML={{__html: photo.image.replace(/\\/g,'')}} />
        ))} 
        </div>

    );
}

export default Pictures;