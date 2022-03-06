import './App.css';
import Header from './Header';
import Form from './Form';
import Content from './Content';
import Benefits from './Benefits';
import Footer from './Footer';

function App() {
  return (
      <div className='App'>
          <Header />
          <Content />
          <Benefits/>
          <Form />
          <Footer />
      </div>
  );
}

export default App;
