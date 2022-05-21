import PP from './PrivacyPolicies.js';
import Documentation from './Documentation.js';
import Contact from './Contact.js';
import Tos from './Tos.js';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1> Hello There! </h1>
    <br></br>
    <Documentation />
    <br></br>
    <br></br>
    <br></br>
    <PP />
    <br></br>
    <br></br>
    <br></br>
    <Tos />
    <br></br>
    <Contact />
    </div>
  );
}

export default App;
