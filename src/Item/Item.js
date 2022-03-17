import React from "react";
import './Item.css';
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.completeToggle = this.completeToggle.bind(this);
        this.handleEditing = this.handleEditing.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    delete() {
        this.props.onDelete(this.props.item.id);
        console.log(this.props.item.id);
    }

    completeToggle() {
        this.props.onComplete(this.props.item);
    }

    handleEditing() {
        this.props.handleEditing(this.props.item);
    }

    handleUpdate(event) {
        if(event.key === 'Enter'){
            this.props.handleUpdate(this.props.item.id);
        }
    }

    handleFocus(e) {
        e.target.select();
    }
    
    render() {
        let viewMode = {};
        let editMode = {};

        if(this.props.item.editing) {
            viewMode.display = 'none';
        } else {
            editMode.display = 'none';
        }

        return(
            <div>
                <div className={`Item ${this.props.isComplete ? 'completed' : ''}`} style={viewMode}>
                {this.props.todo}
                    <div className="icons">
                        <FaCheck className="iconstyle check" onClick={this.completeToggle}/>
                        <FaEdit className="iconstyle edit" onClick={this.handleEditing}/>
                        <FaTrash className="iconstyle trash" onClick={this.delete}/> 
                    </div>
                </div>
                <input 
                    type="text" 
                    className="textInput" 
                    style={editMode} 
                    value={this.props.todo} 
                    onChange={e => this.props.setUpdate(e.target.value, this.props.item.id)}
                    onKeyDown={this.handleUpdate}
                    onFocus={this.handleFocus}
                    />
            </div>
            
        );
    }
}

export default Item;