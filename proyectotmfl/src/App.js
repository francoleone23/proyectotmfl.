import './App.css';
import Header from "./Components/Header/header";
import Card from "./Components/Card/card";
import Footer from "./Components/Footer/footer";
import Main from './Components/Main/main';

function App() {
  
  let peliculasItems = []
  
  return (
    <div>
      <Header/>
        <main> 
          <Main/>
        </main>
      <Footer/>
   </div>
 );

}

export default App;