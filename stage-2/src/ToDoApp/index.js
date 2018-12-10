import React from 'react';
import axios from 'axios';

import {
  ToDoWrapper,
  SubHeading,
  Header,
  MainHeading,
  Form,
  Input,
  AddButton,
  DeleteButton,
  ToDoList,
  ToDoRow,
  Text,
} from "./StyledComponents"

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
      <ToDoWrapper className="to-do-app">
      <SubHeading className="to-do-app__heading to-do-app__heading--sub">Add your To-Do's here</SubHeading>
        <Header className="to-do-app__header">
          <MainHeading className="to-do-app__heading to-do-app__heading--main">To Do {this.state.data.length}</MainHeading>
        </Header>

        <Form
          className="to-do-app__form"
          onSubmit={(e) => {
            e.preventDefault();
            addTodo(inputRef.value);
            inputRef.value = '';
          }}>
          
          <Input
            className="to-do-app__input"
            ref={node => {
             inputRef = node;
            }}
          />

          <AddButton
            className="to-do-app__button to-do-app__button--primary"
            type='submit'
          >
            Add
          </AddButton>
        </Form>
          
        <ToDoList className="to-do-app__list">
          {
            this.state.data.map((todo) => (
              <ToDoRow key={todo.id} className="to-do-app__row">
                <Text className="to-do-app__text">{todo.text}</Text>
                <DeleteButton
                  className="to-do-app__button to-do-app__button--destructive"
                  onClick={() => {this.handleRemove(todo.id)}}
                >
                  delete
                </DeleteButton>
              </ToDoRow>
            ))
          }
        </ToDoList>

      </ToDoWrapper>
    );
  }
}
export default TodoApp;
