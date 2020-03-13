import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component
{
    state={images:[]}

    onSearchSubmit = async term =>
    {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},           
        })
        this.setState({images: response.data.results}); 
    }

    render()
    {
        return (
        <div className='ui container' style={{marginTop: '10px'}}> 
            <h1 className='ui header' style={{textAlign: 'center'}}>Search for a picture</h1>
            <SearchBar onSubmit={this.onSearchSubmit}/>   
            <ImageList images={this.state.images}/>
        </div>
        )
    }
}

export default App;

/**'onSubmit' here, is a custom property. Can be named anything because 'SearchBar' is a user defined component.
 * The same can't be done inside a JSX tag  

 const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {Authorization: 'Client-ID SJPf2Nb31XZmJWhHSMxpednoVjCVm3AlDlSGCBNAYo4'}          
        })
**/