import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

class ItemList extends React.Component {
    render() {
        return(
            <div className="ItemList">
                {
                    this.props.itemList.map(item => {
                        return <Item 
                            todo={item.text} 
                            key={item.id} 
                            item={item}
                            isComplete={item.isComplete}
                            onDelete={this.props.onDelete}
                            onComplete={this.props.onComplete}
                            handleEditing={this.props.handleEditing}
                            setUpdate={this.props.setUpdate}
                            handleUpdate={this.props.handleUpdate}
                        />
                    })
                }
            </div>
        );
    }
}

export default ItemList;