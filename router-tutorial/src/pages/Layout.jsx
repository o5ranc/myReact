import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  
  const style = {background: 'lightgray', padding: 16, fontSize: 24};

  const goBack = () => {
    navigate(-1);
  }

  const goArticles = () => {
    navigate('/articles', { replace: true});
  }

  return (
    <div>
      <header style={style}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글목록</button>
        <p>Header</p>
      </header>
      <main>
        {/* 감싼 자식들은 여기 Outlet  자리에 들어와서 보여짐. 따라서 위에 header가 보여지는 상황
        감싸지지 않은 자식에서는 header가 보이지 ㅇ낳음 */}
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout