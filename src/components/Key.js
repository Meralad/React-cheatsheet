import React from 'react';

function Key() {
    return (
        <div className="content-block">

            <h2 className="content-title">Ключи</h2>

            <div className="text-block">
                <p>Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени:</p>
            </div>

            <div className="code-block">
                <pre><code>{`
            const numbers = [1, 2, 3, 4, 5];
            const listItems = numbers.map((number) =>
              <li key={number.toString()}>
                {number}
              </li>
            );
        `}</code></pre>
            </div>

            <div className="text-block">
                <p>Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. Чаще всего вы будете использовать ID из ваших данных как ключи:</p>
            </div>
            
            
            <div className="code-block">
                <pre><code>{`
            const todoItems = todos.map((todo) =>
            <li key={todo.id}>
                {todo.text}
            </li>
            );
        `}</code></pre>
        </div>
        
        <div className="text-block">
            <p>Извлечение компонентов с ключами</p>
            <p>Ключи нужно определять непосредственно внутри массивов.</p>
            <p>Например, если вы извлекаете компонент ListItem,
              то нужно указывать ключ для ListItem / в массиве, а не в элементе li внутри самого ListItem.
            </p>
        </div>

            <div className="code-block">
              <pre><code>{`
            function ListItem(props) {
                    // Правильно! Не нужно определять здесь ключ:
                return <li>{props.value}</li>;
            }

            function NumberList(props) {
                const numbers = props.numbers;
                const listItems = numbers.map((number) =>
           
            // Правильно! Ключ нужно определять внутри массива:
            
                <ListItem key={number.toString()} value={number} />
                );
            return (
                <ul>
                    {listItems}
                </ul>
                );
            }

            const numbers = [1, 2, 3, 4, 5];
        
            ReactDOM.render(
            <NumberList numbers={numbers} />,
            document.getElementById('root')
                );
    `}</code></pre>
</div>
    
    
<div className="text-block">
    <p>Встраивание map() в JSX</p>
    <p>В примерах выше мы отдельно определяли переменную listItems и вставляли её в JSX:</p>
</div>
    
    <div className="code-block">
<pre><code>{`
            function NumberList(props) {
                const numbers = props.numbers;
                const listItems = numbers.map((number) =>
                    <ListItem key={number.toString()}
                value={number} />
                );
            return (
                <ul>
                    {listItems}
                </ul>
                );
            }

`}</code></pre>
</div>
    <div className="text-block">
        <p>JSX позволяет встроить любое выражение в фигурные скобки, так что мы можем включить результат выполнения map():</p>
     </div>

<div className="code-block">
<pre><code>{`
            function NumberList(props) {
                const numbers = props.numbers;
            return (
                <ul>
                    {numbers.map((number) =>
                    <ListItem key={number.toString()}
                    value={number} />
                    )}
                </ul>
                );
            }

`}</code></pre>
</div>

        <div className="text-block">
                <p>Если не указать ключи, в консоли увидим сообщение: Warning: Each child in an array or iterator should have a unique “key” prop.</p>
                <p>Ключи оптимизируют работу с элементами массивов, уменьшают количество ненужных удалений и созданий элементов.</p>
                <p>Без key механизм reconciliation сверяет компоненты попарно между текущим и новым VDOM. Из-за этого может происходить большое количество лишних перерисовок интерфейса, что замедляет работу приложения.</p>
                <p>Добавляя key, вы помогаете механизму reconciliation тем, что с key он сверяет не попарно, а ищет компоненты с тем же key (тег / имя компонента при этом учитывается) — это уменьшает количество перерисовок интерфейса. Обновлены/добавлены будут только те элементы, которые были изменены/не встречались в предыдущем дереве.</p>
                <p>Следите, чтобы не появлялись дублирующие key, при переключении отображения у новых данных не совпадали ключи. Это может привести к нежелательным сайд-эффектам, таким как анимации, или некорректной логике поведения элемента.</p>
                <p>key и ref — специальные props. Они недоступны в компоненте, их нет в child.props. Можно получить доступ в родителе через child.key, но реальных областей применения для этого практически нет. Если в дочерних компонентах нужен key — правильным решением будет задублировать в prop id, например.</p>
        </div>
    </div>
    );
}

export default Key;