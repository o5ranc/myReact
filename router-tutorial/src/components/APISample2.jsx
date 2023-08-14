import React, { useCallback, useEffect, useState, useRef } from 'react'

const APISample2 = () => {
  const [todos, setTodos] = useState(null);
  const [page, setPage] = useState(1);
  const lastRef = useRef(0);

  const callAPI = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      console.log('then res : ', res.json);

      return res.json();
    }).then((json) => {
      console.log('then json : ', json);

      let start = (page - 1) * 10 + 1;
      let end = page * 10;

      const newTodos = json.filter(todo => todo.id >= start && todo.id <= end);
      // 데이터가 여러건 이므로 sample1과 다르게 처리
      console.log('then json newTodos : ', newTodos);
      setTodos(newTodos);
      lastRef.current = Math.ceil(json.length/10);
    })
  }, [page])

  useEffect(() => {
    callAPI();
  }, [callAPI]);

  return (
    <div>
      { todos ? todos.map(todo => <h2 key={todo.id}>{todo.id} : {todo.title}</h2>) : '데이터를 불러오는 중...'}
        <button disabled={page === 1 && true} onClick={() => setPage(page-1)}>이전</button>
        <span>{page} / {lastRef.current}</span>
        <button disabled={page === lastRef.current && true} onClick={() => setPage(page+1)}>다음</button>
    </div>
  )
}

export default APISample2

/* return (
  {/* <div>
    { data ? <h1>{number}: {data.title}</h1> : '데이터를 불러오는 중...' }
    <button onClick={
      () => setNumber(number+1)
    }>데이터 불러오기
    </button>
  </div> */
