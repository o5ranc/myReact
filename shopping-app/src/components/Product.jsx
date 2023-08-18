import React from 'react'
import { useNavigate} from 'react-router-dom'
import Nav from "react-bootstrap/Nav";

const Product = (props) => {
  const navigate = useNavigate();

  const { imgUrl, title, price, id } = props.data;
  console.log('[Product] props : ', props);

  return (
    <div className='col-md-4'>
      <Nav.Link className='c1' 
        onClick={() => navigate('/detail/' + id)}>
        <img src={imgUrl} width='80%' alt={title} />
        <h4>{title}</h4> {/* 삼품명 */}
        <p>{price}</p> {/* 삼품가격 */}
      </Nav.Link>
    </div>
  )
}

export default Product