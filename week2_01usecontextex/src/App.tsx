
import ButtonGroup from './components/ButtonGroup';
import { useCount } from './context/CounterProvider';

function App() {
  const { count } = useCount(); // count만 가져오기

  return (
    <>
      <h1>{count}</h1>
      <ButtonGroup />  {/* handleIncrement/handleDecrement는 ButtonGroup에서 가져옴 */}
    </>
  );
}

export default App;
