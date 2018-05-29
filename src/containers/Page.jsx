import React from 'react';
import { store } from '../store';


class Page extends React.Component {
       

    render(){
    
        const content = store.getState().links.find((page) => {
            return page.route === '/'+this.props.match.params.link;
        })

        return(
            <div>
                <h1>
                {content.title}
                </h1>
                <br/>
                <p>
                {content.text}
                </p>
            </div>    
        );
    }
}



export default Page;