import React from 'react';
import Counter from '../assets/examples/Count';

function State() {
    return (
        <div className="content-block">
            <h2 className="content-title">Состояние</h2>
            <div className="text-block">
                <p>State (состояние) в React – это объект простого JS, позволяющий отслеживать данные компонента. Состояние компонента может меняться. Смена состояния компонента зависит от функциональности приложения. Изменения могут основываться на ответе от пользователя, новых сообщениях с сервера, ответа сети и т.д. </p>
                <p>Состояние компонента должно быть приватным для компонента и контролироваться им. Изменения состояния компонента необходимо делать внутри компонента – инициализация и обновление состояния компонента.</p>
                <p></p>
                <p></p>
            </div>
            <div className="code-block">
                <pre><code>{`
            class App extends React.Component {
                constructor(props) {
                    super(props)
                    this.state = { username: 'johndoe' }
                }
                render() {
                    return (
                        <div> { this.state.username } </div>
                    )
                }
            }
        `}</code></pre>
            </div>
            <div className="text-block">
                <p>Единственный допустимый способ обновления состояния компонента – через setState(). </p>
                <p>Так нельзя менять состояние: this.state.username='Mark'  </p>
                <p>1 способ изменить state:  </p>
            </div>
            <div className="code-block">
                <pre><code>{`
            this.setState({username:'Mark'});
        `}</code></pre>
            </div>
            <div className="text-block">
                <p>2 способ изменить state:  </p>
            </div>
            <div className="code-block">
                <pre><code>{`
            this.setState(() => ({ username: 'Mark' }))
        `}</code></pre>
            </div >
            <div className="text-block">
                <p>В функциональных компонентах state создается с помощью хука useState()</p>
                <p>Чтобы воспользоваться им, необходимо импортировать useState из 'react':</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            import {useState} from 'react';
        `}</code></pre>
            </div >
            <div className="text-block">
                <p>Хук useState() принимается в качестве параметра первоначальное значение для переменной, а возвращает массив, содержащий переменную и функцию, которая изменяет эту переменную.</p>
                <p>При объявлении state  часто используют деструктурирующее присваивание:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            const [name, setName] = useState('Mark');
        `}</code></pre>
            </div >
            
            <div className="text-block">
                <p>Примером работы со state является счётчик, который изменяется при нажатии на кнопку.</p>
                <Counter />
                <p>Код имеет следующий вид:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            function Counter () {
                const [count, setState] = useState(0);
            
                return (
                    <button className="count__btn" onClick={() => setState(count + 1)}>
                        На меня нажали {count} раз
                    </button>
                )
            }
        `}</code></pre>
            </div >
        </div>
    );
}

export default State;