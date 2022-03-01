import './App.css';
import {NavigationBar} from './NavigationBar';
import {Content} from './Content';
import  Footer from './Footer';
import {useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [itemsInCart, setItemsInCart] = useState(0);
  //const [prodState, setProdState] = useState(false);
  return (
    <div className="App">
      <Toaster/>
      <NavigationBar itemsInCart={itemsInCart} />
      <Content itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
      <Footer/>
    </div>
  );
}

export default App;
