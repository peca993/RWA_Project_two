import React from 'react';
import { store } from '../store';


class Editor extends React.Component {

    constructor(props){
        super(props);

        this.state = {
                pageName: '',
                route: '',
                text: '',
                title: ''
        }

        this.handleChangePageName = this.handleChangePageName.bind(this);
        this.handleChangeRoute = this.handleChangeRoute.bind(this);    
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    
    }

    handleChangePageName(event) {
        this.setState({pageName: event.target.value});
    }

    handleChangeRoute(event) {
        this.setState({route: event.target.value});
    }
    
    handleChangeText(event) {
        this.setState({text: event.target.value});
    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    render(){
    
        return(
 
            <div>
                <h1>Editor</h1>
                <br/>
                <br/>
                <h3>Change title</h3>
                <br/>
                <form className="jumbotron" >
                <label>Title</label>
                    <input name="title" className="form-control" value={this.state.title} onChange={this.handleChangeTitle} />
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={() => {
                            store.dispatch({
                                type: "CHANGE_TITLE",
                                payload: this.state.title
                            })
                            this.setState({title: ''});
                        }}
                     >
                        Change title
                    </button>
                </form>
                <br/>
                <h3>Add page</h3>
                <br/>
                <form className="jumbotron">
                    <label>Title</label>
                    <input name="title" className="form-control" value={this.state.pageName} onChange={this.handleChangePageName} />
                    <br/>
                    <label>Route</label>
                    <input name="route" className="form-control" value={this.state.route} onChange={this.handleChangeRoute} />
                    <br/>
                    <label>Text</label>
                    <textarea name="text" className="form-control" value={this.state.text} onChange={this.handleChangeText} >
                    </textarea>
                    <br/>
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={() => {
                            store.dispatch({
                                type: "ADD_PAGE",
                                payload: {
                                    title: this.state.pageName,
                                    route: "/"+this.state.route,
                                    text: this.state.text
                                }
                            })
                            this.setState({pageName: '',route: '',text: ''});
                        }}
                     >
                        Add page
                    </button>
                    
                    <button type="button" className="btn btn-danger" onClick={ () => {
                     store.dispatch({
                        type: "REMOVE_LINK"
                    })
                } 
                }>Reset</button>

                </form>
            </div>
        );
    }
}




export default Editor;