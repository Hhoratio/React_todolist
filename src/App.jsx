import React, {Component} from 'react';
import InputBox from './components/InputBox';
import List from './components/List/';
import Footer from './components/Footer';
import { v4 as uuidv4} from 'uuid'
import './App.scss'

class App extends Component { 
    state = {
        tasks: [
            {id: uuidv4(), name: "健身", done: false},
            {id: uuidv4(), name: "打網球", done: false},
            {id: uuidv4(), name: "游泳", done: false},
            {id: uuidv4(), name: "寫程式", done: false},
            {id: uuidv4(), name: "看電影", done: false}
        ]
    }

    deltodo = (id) => {
        const {tasks} = this.state;
        const newArr = tasks.filter((task) => {
            return task.id !==id;
        })
        this.setState({tasks: newArr});
    }

    // 讓子元件調用，可以將子元件的參數傳給父元件
    addtodo = (newObj) => {
        const {tasks} = this.state;
        this.setState({tasks: [newObj,...tasks]})
    }

    updatetodo = (id, done) => {
        const { tasks } = this.state;
        const newTasks = tasks.map(todo => {
            if(todo.id === id) todo.done = done;
            return todo;
        })
        this.setState({tasks: newTasks});
    }

    selchecked = (bool) => {
        const { tasks } = this.state;

        // {...obj, key: value} 類似 Object.assign()
        const newTasks = tasks.map(todo => ({...todo, done: bool}))
        this.setState({tasks: newTasks});
    }

    delselect = () => {
        const { tasks } = this.state;
        const newArr = tasks.filter(list => {
            return list.done !== true;
        })
        this.setState({tasks: newArr});
    }

    render() { 
        return (
            <div className="out_container">
                <InputBox addtodo={this.addtodo}/>
                <List tasks={this.state.tasks} deltodo={this.deltodo} updatetodo={this.updatetodo}/>
                <Footer tasks={this.state.tasks} selchecked={this.selchecked} delselect={this.delselect}/>
            </div>
        )
    }
}
 
export default App;