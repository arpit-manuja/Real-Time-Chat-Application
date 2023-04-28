
import './App.css';
import { Route } from 'react-router-dom';
import Homepages from './pages/Homepages';
import Chatpage from './pages/Chatpage';
function App() {
  return (
  <>

    <div className='App'>
    <Route exact path="/" component={Homepages}/>
      <Route path ="/chats" component={Chatpage}/>



    </div>

  
  
      

  </>

  
   
  );
}

export default App;
