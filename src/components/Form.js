import { Checkbox, Radio} from 'antd';
import React from 'react';

function Form() {
    return (
        <div className="content-block">
            <h2 className="content-title">Работа с формами</h2>
            <div className="text-block">
                <p>В React мы можем использовать все стандартные элементы форм, которые есть в html, однако здесь эти элементы приобретают дополнительные возможности. Рассмотрим, как работать с формами в React.</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            class UserForm extends React.Component {
                constructor(props) {
                  super(props);
                  this.state = {name: ""};
                    this.onChange = this.onChange.bind(this);
                    this.handleSubmit = this.handleSubmit.bind(this);
                }
              
                onChange(e) {
                  var val = e.target.value;
                  this.setState({name: val});
                }
              
                handleSubmit(e) {
                  e.preventDefault();
                  alert("Имя: " + this.state.name);
                }
              
                render() {
                  return (
                    <form onSubmit={this.handleSubmit}>
                      <p>
                        <label>Имя:</label><br />
                        <input type="text" value={this.state.name} onChange={this.onChange}/>
                      </p>
                      <input type="submit" value="Отправить" />
                    </form>
                  );
                }
              }
              
              ReactDOM.render(
                <UserForm />,
                document.getElementById("app")
                )
        `}</code></pre>
            </div>
            <div className="text-block">
                <p>Чтобы контролировать введенные значения, в конструкторе устанавливается объект state:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            this.state = {name: ""};
        `}</code></pre>
            </div>
            <div className="text-block">
                <p>При определении поля ввода каждое поле связывается с определенным значением в state:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            <input type="text" value={this.state.name} onChange={this.onChange} />
        `}</code></pre>
            </div >
            <div className="text-block">
                <p>Так, источником значения для поля ввода имени является объект this.state.name.</p>
                <p>Для отслеживания изменений в поле ввода нам надо определить обработчик для события change с помощью атрибута onChange. Этот обработчик будет срабатывать при каждом нажатии клавиши клавиатуры. Если мы не определим для поля подобный обработчик, то это поле ввода будет доступно только для чтения.</p>
                <p>Суть каждого обработчика заключается в изменении значений в this.state:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            onChange(e) {
                var val = e.target.value;
                this.setState({name: val});
            }
        `}</code></pre>
            </div >
            <div className="text-block">
                <p>С помощью e.target.value получаем введенное значение. После обновления новое значение this.state.name отобразится в поле ввода.</p>
                <p>Пример полей разных типов:</p>
            <div>
                <Checkbox>Checkbox</Checkbox>
                <p><Radio>Radio</Radio></p>
                <textarea></textarea>
            </div>
        </div>

        </div>
    );
}

export default Form;