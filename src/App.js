
import './App.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
// import Signup from './components/signup/Signup';

// import ReactDOM from 'react-dom/client';


function App() {
  return (
    <Provider>
 <div className="App">
 
<Home/>
        
    </div>
    </Provider>
  );
}

export default App;
