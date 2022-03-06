function Form() {
    return (
      <div className="contact">
        
            <div className="form">
                <form>
                <h2>schedule cleaning</h2>
                <div className="items-form">
                    <input type="text" placeholder="Name..." />
                    <input type="tel" placeholder="Phone..." required />
                    <input type="date" required />
                    <input type="submit" value="Request Janitor" />
                </div>
                </form>
            </div>
        </div>
      
    );
  }
  
  export default Form;
  