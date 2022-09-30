import './App.css';

import Trending from "./trending";
import Card from "./card";
import Footer from "./footer"

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='logo'>
          <h1>Edyoda</h1>
          <p>Stories</p>
        </div>
        <div className='dropdown'>
          <select className="Explore">
            <option>Explore Categories</option>
            <option>Artificial Intelligence</option>
            <option>Data Science</option>
            <option>Cloud Computing</option>
            <option>Programming Language</option>
            <option>Technology and Tools</option>
            <option>Others</option>
          </select>
        </div>

        <div className='flexEnd'>
          <span className='about'>EdYoda is free learning and knowledge <br></br>
            sharing platform for techies </span>
          <button className='btn'> <a target="_blank" href="https://edyoda.com">Go to Main Website </a></button>
        </div>

        <></>


      </header>

      <Trending />
      <Card />
      <Footer />
    </div>
  );
}

export default App;