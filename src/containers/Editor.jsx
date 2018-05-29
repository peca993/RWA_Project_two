import React from 'react';
import { store } from '../store';


class Editor extends React.Component {

    constructor(props){
        super(props);

        this.state = {
                title: '',
                route: '',
                text: ''
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeRoute = this.handleChangeRoute.bind(this);    
        this.handleChangeText = this.handleChangeText.bind(this);
    
    
    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    handleChangeRoute(event) {
        this.setState({route: event.target.value});
    }
    
    handleChangeText(event) {
        this.setState({text: event.target.value});
    }

    addPage() {
        

    }

    render(){
    
        return(
 
            <div>
                <h1>Editor</h1>
                <br/>
                <h3>Add page</h3>
                <br/>
                <form>
                    <label>Title</label>
                    <input name="title" className="form-control" value={this.state.title} onChange={this.handleChangeTitle} />
                    <br/>
                    <label>Route</label>
                    <input name="route" className="form-control" value={this.state.route} onChange={this.handleChangeRoute} />
                    <br/>
                    <label>Text</label>
                    <textarea name="text" className="form-control" value={this.state.text} onChange={this.handleChangeText} >
                    </textarea>

                    <br/>
                    <input type="checkbox" name="homepageCheck"  />
                    <label>Home page </label>

                    <br/>
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={() => {
                            store.dispatch({
                                type: "ADD_PAGE",
                                payload: {
                                    title: this.state.title,
                                    route: "/"+this.state.route,
                                    text: this.state.text
                                }
                            })
                        }}
                     >
                        Add page
                    </button>


                </form>
                <br/>            
                <button className="btn btn-danger" onClick={ () => {
                     store.dispatch({
                        type: "REMOVE_LINK"
                    })
            
                    console.log(store.getState().links.links)

                } 
                }>Reset</button>
            </div>
        );
    }
}




export default Editor;