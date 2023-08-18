import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from "react-bootstrap/Nav";

const Detail = (props) => {
  let { id } = useParams();
  id = parseInt(id);

  const { title, imgUrl, content, price } = props.data[id];
  const [tab, setTab] = useState(0);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={'../' + imgUrl} alt={title} width='95%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{title}</h4>
          <p>{content}</p>
          <p>{price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>

      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(0)} eventKey='link0'>상품내역</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)} eventKey='link1'>배송안내</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(2)} eventKey='link2'>문의하기</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
    </div>
  )
}

/* function TabContent({tab}) {
  return [[<div>내용</div>, <div>내용1</div>, <div>내용2</div>], [tab]];
}
*/

function TabContent({tab}) {
  if(tab === 0) return <div>내용1</div>  
  else if(tab === 1) return <div>내용2</div>  
  else if(tab === 2) return <div>내용3</div>  
}

export default Detail