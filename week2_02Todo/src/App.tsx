import Todo from './components/Todo'
import { TodoProvider } from './context/TodoContext'
function App() {

  return (
    <div className="min-h-screen bg-gray-100  flex items-center justify-center ">
    <TodoProvider>
      <Todo/>
      </TodoProvider>
    </div>
  )
}

export default App
