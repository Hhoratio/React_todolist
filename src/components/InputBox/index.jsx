import React from 'react';
import './index.scss';
import { v4 as uuidv4} from 'uuid';

class InputBox extends React.Component {
    keyhandle = (e) => {
        // 只有當按下 enter 鍵才執行下面代碼
        if(e.keyCode !== 13) return;
        if(e.target.value.trim() === '') return alert(`輸入框不能為空`);
        const newObj = {
            id: uuidv4(),
            name: e.target.value,
            done: false
        };
        
        this.props.addtodo(newObj);
        e.target.value = '';
    }

    render() { 
        return (
            <input className="ipt_box" type="text" placeholder='請輸入要新增的項目' onKeyUp={this.keyhandle}/>
        );
    }
}
 
export default InputBox;