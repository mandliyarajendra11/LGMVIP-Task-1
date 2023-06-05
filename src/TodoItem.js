import React, { useState } from 'react'
import { Delete } from './Redux/Action';
import { useSelector ,useDispatch} from 'react-redux'
export const TodoItem = () => {
  const dispatch =useDispatch();
  const val=useSelector((s)=>s.Reducer.list);
 const [done,setDone] = useState('');
  return (
    <ul className="list-group">
      {
        
        val.map((e)=>{
         console.log(e);
          return <li key={e.id} className=" list-group-item mb-3" style={{width:'50vw',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <input type='checkbox' className='form-check-input form-check-input-lg'  onChange={(curr)=>curr.target.checked?setDone(e.id):setDone('')} />
             <span className={done===e.id?"del":null} style={{overflow:'hidden'}} > {e.data}</span>  <span className="btn-dark rounded text-center px-2 pb-1  fw-bolder" 
          onClick={()=>dispatch(Delete(e.id))}>&times;</span></li>
          
        })}
    </ul>
    )
}
