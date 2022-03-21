import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-main">
        <div className="App-nav">
          <Navigation />
        </div>
        <div className="App-content">
          <Content />
        </div>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
