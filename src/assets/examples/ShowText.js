import React from 'react';
import { useState } from 'react';
import '../examples/ShowText.css'

function ShowText () {
    const [showMode, setShowMode] = useState(false);

    return(
        <>
        <button className='show__btn' onClick={() => setShowMode(!showMode)}>
            Покажи/скрой текст!
        </button>
        {showMode ? <ShowText /> : null}
        </>
    )
}

export default ShowText;