import React, {useState} from 'react';
import data from './data';

import './App.css';


function App() {
  let [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        
      </section>
    </main>
    
  );
}

export default App;
