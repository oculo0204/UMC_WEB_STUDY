import './App.css'

function App() {

  return (
    <>
      <div className='todo-wrap'>
        <header>TODO LIST</header>
        <form id='todo-form'>
          <input id="todo-input" type="text" placeholder='할 일 입력'/>
          <button type="submit">할 일 추가</button>
        </form>
        <div className='show-wrap'>
          <section className='ongoing-wrap'>
            <h1>할 일</h1>
            <ul id='todo-list'>
              <li><p>매튜</p><button>완료</button></li>
            </ul>
          </section>
          <section className='complete-wrap'>
            <h1>완료</h1>
            <ul id='complete-list'>
              <li><p>오타니</p><button>삭제</button></li>  
            </ul>  
          </section>
        </div>
      </div>
    </>
  )
}

export default App
