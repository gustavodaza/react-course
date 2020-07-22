import React, { useState, useEffect, useReducer, useRef, useMemo } from 'react'
import axios from 'axios'
import List from './List'
import { useFormInput } from '../hooks/forms'

const Todo = props => {
  const [inputisValid, setInputIsValid] = useState(false)
  // const [todoName, setTodoName] = useState('')
  // const [submittedTodo, setSubmittedTodo] = useState(null)
  // const [todoList, setTodoList] = useState([])
  // const [todoState, setTodoState] = useState({ userInput: '', todoList: [] })
  // const todoInputRef = useRef()
  const todoInput = useFormInput()

  const todoListReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return state.concat(action.payload);
      case 'SET':
        return action.payload;
      case 'REMOVE':
        return state.filter(todo => todo.id !== action.payload);
      default:
        return state;
    }
  };

  const [todoList, dispatch] = useReducer(todoListReducer, [])

  useEffect(() => {
    axios.get('https://test-d8930.firebaseio.com/todos.json').then(result => {
      console.log(result);
      const todoData = result.data;
      const todos = [];
      for (const key in todoData) {
        todos.push({ id: key, name: todoData[key].name });
      }
      dispatch({ type: 'SET', payload: todos });
    });
    return () => {
      console.log('Cleanup');
    };
  }, []);

  const mouseMoveHandler = event => {
    console.log(event.clientX, event.clientY)
  }

  // useEffect(() => {
  //   document.addEventListener('mousemove', mouseMoveHandler)
  //   return () => {
  //     document.removeEventListener('mousemove', mouseMoveHandler)
  //   }
  // }, [])

  // useEffect(() => {
  //   dispatch({type: 'ADD', payload: submittedTodo})
  // }, [submittedTodo])

  // const inputChangeHandler = (event) => {
  //   setTodoState({
  //     userInput: event.target.value,
  //     todoList: todoState.todoList
  //   })
  // }

  // const todoAddHandler = () => {
  //   setTodoState({
  //     userInput: todoState.userInput,
  //     todoList: todoState.todoList.concat(todoState.userInput)
  //   })
  // }

  // const inputChangeHandler = (event) => {
  //   setTodoName(event.target.value)
  // }


  const todoAddHandler = () => {
    const todoName = todoInput.value
    axios.post('https://test-d8930.firebaseio.com/todos.json', { name: todoName })
      .then(response => {
        const todoItem = {id: response.data.name, name: todoName}
        dispatch({type: 'ADD', payload: todoItem})
        // setTodoList(todoList.concat(todoItem))
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const todoRemoveHandler = todoId => {
    axios.delete('https://test-d8930.firebaseio.com/todos/' + todoId + '.json')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    dispatch({type: 'REMOVE', payload: todoId})
  }

  const inputValidationHandler = event => {
    if (event.target.value.trim() === ''){
      setInputIsValid(false)
    } else {
      setInputIsValid(true)
    }
  }

  return <React.Fragment>
    <input
      type='text'
      placeholder='Todo'
      onChange={todoInput.onChange}
      value={todoInput.value}
      style={{backgroundColor: todoInput.validity === true ? 'transparent' : 'red'}}/>
    <button onClick={todoAddHandler} type='button'>Add</button>
    {useMemo(() => <List items={todoList} onClickHandler={todoRemoveHandler}/>, [todoList])}
  </React.Fragment>
}

export default Todo
