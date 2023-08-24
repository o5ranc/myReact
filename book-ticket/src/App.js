import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import BookMainPage from './pages/book/BookMainPage'
import '../src/css/reset.css'

const SRootWrapper = styled.div`
  width: 1280px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  border: 1px solid black;
  box-sizing: border-box;
`

function App() {
  return (
   <BrowserRouter>
      <SRootWrapper>
        <BookMainPage/>
      </SRootWrapper>
   </BrowserRouter>
  );
}

export default App;

components