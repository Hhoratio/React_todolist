import React from 'react';
import Item from '../Item';
import './index.scss'
class List extends React.Component { 
    render() { 
        const {tasks, deltodo, updatetodo} = this.props
        return (
            <ul>
                {
                    tasks.map(task => {
                        return <Item task={task} key={task.id} deltodo={deltodo} updatetodo={updatetodo}/>
                    })
                }
            </ul>
        );
    }
}
 
export default List;