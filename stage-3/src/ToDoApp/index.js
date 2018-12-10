import React from 'react';
import axios from 'axios';

import {
  ToDoWrapper,
  SubHeading,
  Header,
  MainHeading,
  Form,
  Input,
  Button,
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
      <ToDoWrapper>
      <SubHeading>Add your To-Do's here</SubHeading>
        <Header>
          <MainHeading >To Do {this.state.data.length}</MainHeading>
        </Header>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addTodo(inputRef.value);
            inputRef.value = '';
          }}>
          
          <Input
            ref={node => {
             inputRef = node;
            }}
          />

          <Button
            type='submit'
            as='button'
          >
            Add
          </Button>
        </Form>
          
        <ToDoList>
          {
            this.state.data.map((todo) => (
              <ToDoRow>
                <Text>{todo.text}</Text>
                <Button
                  onClick={() => {this.handleRemove(todo.id)}}
                  as='button'
                  delete
                >
                  delete
                </Button>
              </ToDoRow>
            ))
          }
        </ToDoList>

      </ToDoWrapper>
    );
  }
}
export default TodoApp;
