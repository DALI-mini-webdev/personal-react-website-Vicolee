import React, { Component } from 'react';

class DogPosting extends Component {
    constructor(props) {
        super(props);
        this.state = {editing: false};
    }

    deletePosting = () => {
        this.props.delete(this.props.id)
    }

    editTitle = () => {
        this.setState({editing: true})
    }

    submit = () => {
        var newName = {
            name:this.state.newTitle
        }
        this.props.save(this.props.id, newName)
        this.setState({editing: false})
    }

    render() {
        var editBoxOrEditButton = null;
        if (this.state.editing) {
            editBoxOrEditButton = (
                <div>
                    <input value={this.state.newTitle} onChange={this.changeNewTitle}/>
                    <button onClick={this.submit}> submit </button>
                </div>
            )
        }
        else {
            editBoxOrEditButton = <button onClick={this.editTitle}>Edit Title</button>
        }


        return (
            <div>
                <p>{this.props.name}, {this.props.breed}</p>
                <img src={this.props.dogURL} width={100} height={100}/>
                <button onClick={this.deletePosting}>Delete</button>
                {editBoxOrEditButton}
            </div>
        )
    }
}

export default DogPosting;