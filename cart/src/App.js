
import './App.css';
import CartContainer from './CartContainer';
import { useGlobalContext } from './Context/context';
import Navbar from './Navbar';

function App() {
  const {loading} = useGlobalContext()
  if(loading){
    return (
      <div className='loading'>
        <h2> Loading...</h2>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
