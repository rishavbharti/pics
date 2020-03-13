import React from 'react';

class SearchBar extends React.Component
{
    state={term:' '}

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term)  
    }

    render()
    {
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>
                            <input 
                                type='text' 
                                placeholder='Search for an image type and press enter'
                                value={this.state.term}
                                onChange={(event) => this.setState({term: event.target.value})}/>
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar

/* <input type='text' id='query' onChange={(event) => console.log(event.target.value)} /> */

/** When using props inside a Class based component, the props object has to be addressed using this.props*/