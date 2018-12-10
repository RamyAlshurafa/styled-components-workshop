import React from 'react';
import axios from 'axios';

import "./ToDoApp.css"

class TodoApp extends React.Component{  
  state = {
    data: []
  }

  apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'

  inputRef = '';

  // Lifecycle method
  componentDidMount(){
    // Make HTTP reques with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({data:res.data});
      });
  }
  // Add todo handler
  addTodo = (val) => {
    // Assemble data
    const todo = {text: val}
    // Update data
    axios.post(this.apiUrl, todo)
       .then((res) => {
          this.state.data.push(res.data);
          this.setState({data: this.state.data});
       });
  }

  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter
    axios.delete(this.apiUrl+'/'+id)
      .then((res) => {
        this.setState({data: remainder});
      })
  }

  render(){
    // Render JSX
    const { addTodo } = this
    let inputRef = this.inputRef
    return (
      <div className="to-do-app">
      <h4 className="to-do-app__heading to-do-app__heading--sub">Add your To-Do's here</h4>
        <div className="to-do-app__header">
          <h1 className="to-do-app__heading to-do-app__heading--main">To Do {this.state.data.length}</h1>
        </div>

        <form
          className="to-do-app__form"
          onSubmit={(e) => {
            e.preventDefault();
            addTodo(inputRef.value);
            inputRef.value = '';
          }}>
          
          <input
            className="to-do-app__input"
            ref={node => {
             inputRef = node;
            }} />

          <button
            className="to-do-app__button to-do-app__to-do-app--primary"
            type='submit'
          >
            Add
          </button>
          <br />
        </form>
          
        <div className="to-do-app__list">
          {
            this.state.data.map((todo) => (
            <div key={todo.id} className="to-do-app__row">
              <p href="#" className="to-do-app__text">{todo.text}</p>
              <button
                className="to-do-app__button to-do-app__button--destructive"
                onClick={() => {this.handleRemove(todo.id)}}
              >
                delete
              </button>
          </div>
          ))
          }
        </div>

      </div>
    );
  }
}
export default TodoApp;
