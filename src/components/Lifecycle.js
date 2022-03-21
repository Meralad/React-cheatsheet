import React from 'react';

function Lifecycle() {
    return (
        <div className="content-block">
            <h2 className="content-title">Методы жизненного цикла</h2>
            <div className="text-block">
                <p>Основные методы жизненного цикла:</p>
                <p>1. constructor ()</p>
                <p>Обычно в React конструкторы используются только для двух целей:</p>
                <ul>
                    <li>Инициализация локального состояния путем присвоения объекта this.state.</li>
                    <li>Привязка методов обработчика событий к экземпляру.</li>
                </ul>
            </div>
            <div className="code-block">
                <pre><code>{`
            constructor(props) {
                super(props);
                this.state = { counter: 0 };
                this.handleClick = this.handleClick.bind(this);
            }
        `}</code></pre>
            </div>
            <div className="text-block">
                <p>2. render()</p>
                <p>Рендеринг компонента. Отдает JSX.</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            render () {
                return (
                    <div>
                        'Hello'
                    </div>
                )
            }
        `}</code></pre>
            </div >
            <div className="text-block">
                <p>3. componentDidMount()</p>
                <p>componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM). В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов.</p>
            </div>
            <div className="code-block">
                <pre><code>{`
              componentDidMount() {
                this.timerID = setInterval(
                  () => this.tick(),
                  1000
                );
              }
        `}</code></pre>
            </div>
            <div className="text-block">
                <p>4. componentDidUpdate(prevProps, prevState)</p>
                <p>В componentDidUpdate() <b>можно вызывать setState()</b>, однако его <b>необходимо обернуть в условие</b>,
              как в примере выше, чтобы не возник бесконечный цикл. Вызов <code>setState()</code> влечет за собой дополнительный рендер,
              который незаметен для пользователя, но может повлиять на производительность компонента.
              Вместо «отражения» пропсов в состоянии рекомендуется использовать пропсы напрямую.</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            componentDidUpdate(prevProps, prevState) {
                if (this.props.userID !== prevProps.userID) {
                    this.fetchData(this.props.userID);
                }
            }
        `}</code></pre>
            </div >
            <div className="text-block">
                <p>5. componentWillUnmount()</p>
                <p>componentWillUnmount() вызывается непосредственно перед размонтированием и удалением компонента. В этом методе выполняется необходимый сброс: отмена таймеров, сетевых запросов и подписок, созданных в componentDidMount().</p>
                <p>Не используйте setState() в componentWillUnmount(), так как компонент никогда не рендерится повторно. После того, как экземпляр компонента будет размонтирован, он никогда не будет примонтирован снова.</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            componentWillUnmount() {
                alert("The component named Header is about to be unmounted.");
            }
        `}</code></pre>
            </div >
            <div className="text-block">
                <p>Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.</p>
            </div>

        </div>
    );
}

export default Lifecycle;