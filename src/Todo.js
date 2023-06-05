import React, { useRef } from 'react'
import { TodoItem } from './TodoItem'
import { addTodo,Clear} from './Redux/Action';
import {useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const Todo = () => {
  const values=useRef("");
  const dispatch=useDispatch();
  const [error,seterr]=useState("");
  const list=useSelector((e)=>e.Reducer.list);
  function dis() {
    if(values.current.value.length>5){
    dispatch(addTodo(values.current.value));values.current.value="";seterr("");
    }
    else seterr("please enter more than 5 char");
  }
  return (
    <>    <h1 >Todo App <span className="badge bg-danger mb-3">made by rajendra</span></h1>
    <div className="input-group mb-3">
  <input type="text" className="form-control" 
  placeholder="type your message here" ref={values}  onKeyPress={(e)=>{
    if(e.key==="Enter")
      dis()
    }}/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2" 
  onClick={dis} >add item</button>
</div>
    <TodoItem/>
    <p className='bg-success'>{error}</p>
    { list.length!==0?
    <button className="btn bg-warning" type="button" id="button-addon2"
    onClick={()=>dispatch(Clear(values))} >clear all</button>
      :null}
    </>
  )
}

export default Todo