import React, { useCallback, useParams, useState, useEffect } from 'react'
import axios from 'axios';
import { Row, Col, Card, Image } from 'react-bootstrap'

const PostRead = () => {
  const { no } = useParams();
  const [post, setPost] = useState({
    no: '',
    name: '',
    tel: '',
    address: '',
    photo: ''
  });

  console.log('read no : ', no);
  const { name, tel, address, photo } = post;

  const callAPI = useCallback(async () => {
    const result = await axios.get(`https://sample.bmaster.kro.kr/contacts/${no}`);
    console.log(result.data);
    setPost(result.data);
  }, []);

  useEffect(() => callAPI(), [callAPI]);

  return (
    <div>
      <Row className='my-5'>
        <Col className='p-5'>
          <h1 className='text-center mp-5'>{name} 연락처 정보</h1>
          <Card>
            <Card.Header>
              [{no}] {name}
            </Card.Header>
            <Card.Body>
              <Image src={photo} thumnail />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PostRead