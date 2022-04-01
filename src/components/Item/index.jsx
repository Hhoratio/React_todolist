import React from 'react';
import './index.scss'

class Item extends React.Component {
    btn = React.createRef();
    state = {
        mouseState: false
    }
    mouseHandle = (mouseEvent) => {
        return (e) => {
            const { mouseState } = this.state
            const {current: btn} = this.btn
            if(mouseState) {
                btn.style.display = 'none';
                btn.parentNode.style.backgroundColor = '';
            } else {
                btn.style.display = 'block';
                btn.parentNode.style.backgroundColor = '#ddd';
            } 
            this.setState({mouseState: mouseEvent});
        }
    }

    deltodolist = (id) => {
        return () => {
            const {deltodo} = this.props;
           if(window.confirm('確定要刪除嗎 ?'))  deltodo(id);
        }
    }

    checkedUpdate = (id) => {
        const {updatetodo} = this.props
        return (e) => {
            updatetodo(id, e.target.checked)
        }
    }

    render() { 
        const {task: {id, name, done}} = this.props
        return (
                <li id={id} className="li" onMouseEnter={this.mouseHandle(true)} onMouseLeave={this.mouseHandle(false)}>
                    <label htmlFor={id}>
                        {/* defaultChecked 只有一次性生效，後面改變勾選框並不會改變 defaultChecked */}
                        {/* 如果要使用原生的 checked 就必須配合 onChange() 否則系統會警告 */}
                        <input type="checkbox" id={id} checked={done} onChange={this.checkedUpdate(id)} /><span>{name}</span>
                    </label>
                    <button className="li_btn" ref={this.btn} onClick={this.deltodolist(id)}>刪除</button>
                </li>     
        );
    }
}
 
export default Item; 