import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import Burger from './components/Burger'
import Menu from './components/Menu'

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
      
        <div ref={node}>  
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} />
        </div>
      
  );
}

export default App;
