import React from 'react';

function UseEffect() {
    return (
        <div className="content-block">
            <h2 className="content-title"> хук UseEffect</h2>
            <div className="text-block">
                <p>Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect. </p>
            </div>
            <div className="code-block">
                <pre><code>{`
             import {useEffect} from 'react';
        `}</code></pre>
            </div>
            <div className="text-block">
                <p>Хук позволяет использовать 3 метода жизненного цикла:</p>
                <ul>
                    <li>componentDidMount()</li>
                    <li>componentDidUpdate(prevProps, prevState)</li>
                    <li>componentWillUnmount()</li>
                </ul>
                <p>UseEffect принимает в качестве первого параметра функцию, в качестве второго - [ ] (аналог componentDidMount).</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            useEffect ( () => { }, [])
        `}</code></pre>
            </div >
            <div className="text-block">
                <p>UseEffect принимает в качестве первого параметра функцию, в качестве второго - массив с зависимостью (или несколькими) (аналог componentDidUpdate).</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            useEffect ( () => { }, [name])
        `}</code></pre>
            </div >
            <div className="text-block">
                <p>UseEffect принимает в качестве первого параметра функцию, второго параметра - нет (аналог componentDidMount + componentDidUpdate).</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            useEffect ( () => { } )
        `}</code></pre>
            </div >
            <div className="text-block">
                <p>UseEffect принимает в качестве первого параметра функцию, которая возвращает другую функцию (аналог componentWillUnmount).</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            useEffect ( () => {
                return () => {};
            })
        `}</code></pre>
            </div >
        </div>
    );
}

export default UseEffect;