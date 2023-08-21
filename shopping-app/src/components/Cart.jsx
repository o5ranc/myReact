import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addCount, deleteItem, decreaseCount, sortName} from '../store'

/* import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'; */
import {Table, Button} from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log('state.cart 확인 : ', state.cart);

let textverticalAlign = {
   verticalAlign: 'middle', 
   textAlign: 'center' 
} 

  const smallProductStyle = {
    border: '1px solid #ddd',
    height: '100px',
    height: '80px',
    cursor: 'pointer'
  }

  return (
    <div>
      <h5>{state.user.name} {state.user.age}의 장바구니</h5>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>상품이미지</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
        {
                state.cart.map((a, i)=>
                <tr key={i}>
                    <td style={textverticalAlign}>{state.cart[i].id+1}</td>


                    <td>
                     
                    <Link to={`/detail/${state.cart[i].id}`}>
                      <img src={`${state.cart[i].imgUrl}`} style={smallProductStyle} />
                    </Link>

                    </td>
                    <td style={textverticalAlign}>{state.cart[i].title}</td>
                    <td style={textverticalAlign}>{state.cart[i].count}</td>
                    <td style={textverticalAlign}>
                      <Button onClick={()=>{
                         dispatch(addCount(state.cart[i].id))
                    }} variant="outline-success" style={{marginRight:'10px'}}>+</Button>

                    <Button onClick={()=>{
                         dispatch(decreaseCount(state.cart[i].id))
                    }} variant="outline-warning" style={{marginRight:'10px'}}>-</Button>

                    <Button onClick={()=>{
                         dispatch(deleteItem(state.cart[i].id))
                    }} variant="outline-danger">상품삭제</Button>
                  
                    </td>              
                </tr>
                )
            }
        </tbody>
      </Table>
      <Button variant='outline-primary' onClick={() => {
        dispatch(sortName(state.cart.name))
      }}>이름순정렬</Button>{'    '}
    </div>
  )
}

export default Cart