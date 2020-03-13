import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard'

const ImageList = (props) =>
{
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })

    return <div className='image-list'>{images}</div>
}

export default ImageList;


// By destructring
// const images = props.images.map(({description, id, urls}) => {
//     return (
//         <div>
//             <img alt={description} key={id} src={urls.regular}/> 
//             <button>Download</button>
//         </div>)
// })