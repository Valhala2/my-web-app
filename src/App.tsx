import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="button" onClick={() => setCount(count + 1)}>
        Увеличить
      </button>
      <p>Счетчик: {count}</p>
    </div>
  );
};

export default App;
