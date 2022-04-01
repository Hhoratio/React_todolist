import React from 'react';
import './index.scss';

class Footer extends React.Component {

    count = () => {
        const { tasks } = this.props
        let count = tasks.reduce((p, c) => {
            return p + (c.done === true ? 1: 0);
        }, 0)
        return count;
    }

    allchecked = (e) => {
        const { selchecked } = this.props
        selchecked(e.target.checked);
    }

    delall = () => {
        const { delselect } = this.props;
        if(window.confirm('是否確定刪除以勾選項目 ?')) delselect();
    }

    render() { 
        const {tasks} = this.props
        return (
            <div className="f_operator">
                <div>
                    <input type="checkbox" checked={tasks.length === (this.count()) && tasks.length !== 0} onChange={this.allchecked}/>
                    <span>已完成 {this.count()} / 全部 {tasks.length}</span>
                </div>
                <button className='f_btn' onClick={this.delall}>清除已完成的項目</button>
            </div>
        );
    }
}
 
export default Footer;