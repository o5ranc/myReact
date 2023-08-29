import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const PostWrite = () => {
  const navigator = useNavigate();
  const [form, setForm] = useState({
    name: '',
    tel: '',
    address: '',
  });


  const { name, tel, address } = form;
  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    console.log('setForm : ', form);
  }

  const onInsert = async () => {
    if (!name) { alert('이름을 입력하세요!') }
    if (!tel) { alert('연락처를 입력하세요!') }
    if (!address) { alert('주소를을 입력하세요.') }
    else {
      await axios.post('https://sample.bmaster.kro.kr/contacts', form)
      alert('새로운 연락처가 등록되었습니다.')
      navigator('/contacts');
    }
  }


  return (
    <div>
      <Row className='my-5'>
        <Col className='p-5'>
          <h1 className='text-center mb-5'></h1>
          <Form>
            <Form.Control
              className='my-3'
              type="text"
              name='name'
              value={name}
              placeholder="이름을 입력하세요."
              onChange={onChangeForm} />
            <br />
            <Form.Control
              className='my-3'
              type="text"
              name='tel'
              value={tel}
              placeholder="연락처를 입력하세요."
              onChange={onChangeForm} />
            <br />
            <Form.Control
              className='my-3'
              type="text"
              name='address'
              value={address}
              placeholder="주소를 입력하세요."
              onChange={onChangeForm} />
          </Form>
          <div className='text-center mt-3'>
            <Button className='me-2 px-5' type='button'
              onClick={() => onInsert()}>등록</Button>
            <Button variant='secondary px-5'>취소</Button>
          </div>
        </Col>
      </Row>
    </div >
  )
}

export default PostWrite