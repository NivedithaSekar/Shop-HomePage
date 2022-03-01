import './App.css';
import {NavigationBar} from './NavigationBar';
import {Content} from './Content';
import  Footer from './Footer';
import {useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [itemsInCart, setItemsInCart] = useState(0);
  return (
    <div className="App">
      {/**Using toater to pop-up the notification*/}
      <Toaster/>
      <NavigationBar itemsInCart={itemsInCart} />
      <Content itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
      <Footer/>
    </div>
  );
}

export default App;
