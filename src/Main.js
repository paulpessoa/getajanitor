function Main (){
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
                          <input type="text" placeholder='Name...'/>
                          <input type="tel" placeholder='Phone...' required/>
                          <input type="date" required/>
                          <input type="submit" value='Request Janitor'/>
                     
                      </div>
                  </form>

              </div>
            </div>
        </div>

        <div className="content">
            <div className="center benefits">
                <div className="content-single">
                    <h3>Benefits Title</h3>
                    <p>Here is written a text to fill this space, do you have an idea to help me?</p>
                </div>
                <div className="content-single">
                    <h3>Benefits Title</h3>
                    <p>Here is written a text to fill this space, do you have an idea to help me?</p>
                </div>
                <div className="content-single">
                    <h3>Benefits Title</h3>
                    <p>Here is written a text to fill this space, do you have an idea to help me?</p>
                </div>
                <div className="content-single">
                    <h3>Benefits Title</h3>
                    <p>Here is written a text to fill this space, do you have an idea to help me?</p>
                </div>
            </div>
        </div>


    </div>



    );
}

export default Main;