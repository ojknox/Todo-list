import './App.css';
import AddItem from '../AddItem/AddItem';
import ItemList from '../ItemList/ItemList';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      id: 0
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  addItem(item) {
    //check to see if what is added is empty or only has spaces
    if(!item || /^\s*$/.test(item)) {
      return;
    }
    let currentList = this.state.itemList;
    let newItem = {id: this.state.id+1, text: item, isComplete: false, editing: false};
    //add new item to top of list
    currentList.unshift(newItem);
    //set new states
    this.setState({itemList: currentList});
    this.setState({id: newItem.id})
  }

  deleteItem(id) {
    let currentList = this.state.itemList;
    const result = currentList.filter(item => item.id !== id);
    this.setState({itemList: result});
  }

  completeItem(item) {
    let currentList = this.state.itemList;
    let newArray = currentList.map(todo => {
      if(todo.id === item.id){
        return {
          ...todo, isComplete: !todo.isComplete,
        }
      }
      return todo;
    })
    this.setState({itemList: newArray});
  }

  //hide/show the edit input box
  handleEditing(item) {
    let currentList = this.state.itemList;
    let newArray = currentList.map(todo => {
      if(todo.id === item.id){
        return {
          ...todo, editing: !todo.editing,
        }
      }
      return todo;
    })
    this.setState({itemList: newArray});
  }

  setUpdate(updatedTodo, id) {
    this.setState({
      itemList: this.state.itemList.map(todo => {
        if(todo.id === id) {
          todo.text = updatedTodo;
        }
        return todo
      })
    })
  }

  handleUpdate(id) {
    this.setState({
      itemList: this.state.itemList.map(todo => {
        if(todo.id === id) {
          todo.editing = !todo.editing;
        }
        return todo
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>To do list</h1>
        <AddItem onAdd={this.addItem}/>
        <ItemList 
          itemList={this.state.itemList}
          onDelete={this.deleteItem}
          onComplete={this.completeItem}
          handleEditing={this.handleEditing}
          setUpdate={this.setUpdate}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
