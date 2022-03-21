import React from 'react';

function Fragment() {
    return (
        <div className="content-block">
            <h2 className="content-title">Фрагмент</h2>
            <div className="text-block">
                <p>С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.</p>
                <p>Используем React.Fragment или выполняем импорт, чтобы использовать Fragment: </p>
            </div>
            <div className="code-block">
                <pre><code>{`
            import { Fragment } from 'react';
        `}</code></pre>
            </div>
            <div className="text-block">
                <p>Заменяем теги div на Fragment:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            class ChildComponent extends React.Component {
                render() {
                    return (
                        <Fragment>
                            <h1>Hello Child Component</h1>
                        </Fragment>
                    )
                }
            }
        `}</code></pre>
            </div>
            <div className="text-block">
                <p>Существует сокращенная запись (импортировать не нужно):</p>
            </div>
            <div className="code-block">
                <pre><code>{`
             class ChildComponent extends React.Component {
                render() {
                    return (
                        <>
                            <h1>Hello Child Component</h1>
                        </>
                    )
                }
            }
        `}</code></pre>
            </div >
            <div className="text-block">
                <p>Недостаток сокращенной записи: нельзя использовать атрибут key.</p>
            </div>

        </div>
    );
}

export default Fragment;