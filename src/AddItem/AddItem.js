import React from 'react';
import './AddItem.css';
import { FaPlus } from "react-icons/fa";


class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.handleTermChange = this.handleTermChange.bind(this);
        this.add = this.add.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    add() {
        this.props.onAdd(this.state.term);
        this.setState({term: ''});
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    handleKeyPress(event) {
        if(event.key === 'Enter') {
            this.add();
        }
    }
    
    render() {
        return (
            <div className = "AddItem">
                <input 
                    placeholder='Add a new item'  
                    value = {this.state.term}
                    onChange={this.handleTermChange} 
                    onKeyPress={this.handleKeyPress}>
                    </input>
                <button 
                    className="AddButton" 
                    onClick={this.add}
                    >Add item</button>
                <div className="mobileAdd" onClick={this.add}>
                    <FaPlus className="plus"/>
                </div>
            </div>
        );
    }
}

export default AddItem;