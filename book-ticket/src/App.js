import styled from 'styled-components'

import BookMainPage from './pages/book/BookMainPage'

import '../src/css/reset.css'

const RootWrapper = styled.div`
  width: 1280px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff6f6;
`

const onBookBtnClick = () => {

}

function App() {
  return (
    <RootWrapper>
      <BookMainPage/>
    </RootWrapper>
  );
}

export default App;
