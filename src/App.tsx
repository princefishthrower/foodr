import React, { useState } from 'react';
import { Meals } from './components/Meals';
import { LikedMeals } from './components/LikedMeals/LikedMeals';

function App() {
  const [showExplorer, setShowExplorer] = useState(true);
  return (
    <div className="container">
      <h1 className='text-center'>Foodr</h1>
      <h2 className='text-center'>Tinder for food!</h2>
      <div className='d-flex flex-row justify-content-center align-items-center'>
        <div>
          <button onClick={() => setShowExplorer(true)} className='btn btn-link'>Explore</button>
        </div>
        <div>
          <button onClick={() => setShowExplorer(false)} className='btn btn-link'>Liked Meals</button>
        </div>
      </div>
      {/* I know, better pattern would be switch with enum for possible multiple views later */}
      {showExplorer ? <Meals/> : <LikedMeals/>}
    </div>
  );
}

export default App;
