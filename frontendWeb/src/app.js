import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import './index.css'
import DetailStudScreen from './screens/DetailStudScreen';
function App() {

  return (
    <BrowserRouter>
    <div className="homeImage">
    <header>
    SUN SHINE COLLEGE STUDENT DETAILS
</header>
<main>
  <Route path="/" component={HomeScreen} exact></Route>
  <Route path="/student/:id" component={DetailStudScreen}></Route>
</main>
<footer className="footer">
<ul>
    <li><h2>SUN SHINE COLLEGE</h2></li>
    <li><i><blockquote>Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.</blockquote></i></li>
</ul>
<ul>
    <li><h2>TECHNOLOGIES</h2></li>
    <li><p>Java</p></li>
    <li><p>JavaScript</p></li>
    <li><p>Python</p></li>
    
</ul>
<ul>
    <address>Hyderabad<br/>Amerpet<br/>H:No:3-5/353</address>
</ul>
    </footer>
    </div>
    </BrowserRouter>
      );
}

export default App;
