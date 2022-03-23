import React, { useState } from 'react';
import '../examples/Count.css'


function Counter () {
    const [count, setState] = useState(0);

    return (
          <button className="count__btn" onClick={() => setState(count + 1)}>
          На меня нажали {count} раз 
          </button>  
    )
}

export default Counter;