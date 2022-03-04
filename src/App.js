import './App.css';

function App() {
  return (
    <div className="App">
        <div className='main'>
            <div className='center'>

              <div className='menu'>
                  <div className='logo'>
                    <h3>Landingpage React</h3>
                  </div>
                  <div className='item-menu'>
                      <a href='#'>Login</a>
                  </div>
              </div>

              <div className='form'>
                  <form>
                      <h2>Contact us</h2>
                      <div className='items-form'>
                          <input type="text" placeholder='Name here...'/>
                          <input type="email" placeholder='E-mail here...'/>
                          <input type="tel" placeholder='Phone number...' required/>
                          <input type="submit" value='Request Janitor'/>
                     
                      </div>
                  </form>

              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
