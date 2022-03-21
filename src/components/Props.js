import React from 'react';

function Props() {
    return (
        <div className="content-block">
            <h2 className="content-title">Props</h2>
            <div className="text-block">
                <p>То, что мы называем аргументами в мире функций, в мире компонентов называется свойствами.</p>
                <p>Функциональные компоненты свойства принимают в качестве аргумента.</p>
                <p>Props представляют собой объект, содержащие свойства.</p>
                <p>Обратиться к ним можно - props.имя-свойства.</p>
                <p>Props - только для чтения.</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            function Welcome(props) {
                return <h1>Привет, {props.name}</h1>;
            }
            `}</code></pre>
            </div>
            <div className="text-block">
                <p>Классовые компоненты свойства принимают по умолчанию и обратиться к ним можно с помощью this.props.имя-свойства.</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            class Welcome extends React.Component {
                render() {
                    return <h1>Привет, {this.props.name}</h1>;
                }
            }
            `}</code></pre>
            </div>
            <div className="text-block">
                <p>Элементы могут описывать и наши собственные компоненты: </p>
            </div>
            <div className="code-block">
                <pre><code>{`
            const element = <Welcome name="Алиса" />;
            `}</code></pre>
            </div>
            <div className="text-block">
                <p>Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в один объект и передаёт их нашему компоненту. Этот объект называется «пропсы». </p>
                <p>Например, этот компонент выведет «Привет, Алиса» на страницу:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            function Welcome (props) {
                return <h1> Привет, {props.name}</h1>;
            }
            const element = <Welcome name="Алиса" />;
            ReactDOM.render(
                element,
                document.getElementById('root')
            );
            `}</code></pre>
            </div>
            <div className="text-block">
                <p>
                    <ol>
                        <li>Мы передаём React-элемент &lt;Welcome name="Алиса"&gt; в ReactDOM.render().</li>
                        <li>React вызывает наш компонент Welcome с пропсами &#123;name: 'Алиса'&#125;.</li>
                        <li>Наш компонент Welcome возвращает элемент &lt;h1&gt;Привет, Алиса&lt;/h1&gt; в качестве результата.</li>
                        <li>React DOM делает минимальные изменения в DOM, чтобы получилось &lt;h1&gt;Привет, Алиса&lt;/h1&gt;.</li>
                    </ol>
                </p>
                <p>Компонент никогда не должен что-то записывать в свои пропсы— вне зависимости от того, функциональный он или классовый.</p>
            </div>

        </div >
    );
}

export default Props;