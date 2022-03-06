function Form() {
  return (
    <div className="contact">
      <div className="form">
        <form
          action="https://formsubmit.co/paulmspessoa@gmail.com"
          method="POST"
        >
          <h2>schedule cleaning</h2>
          <div className="items-form">
            <input type="hidden" name="_subject" value="Schedule a Janitor"/>
            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_autoresponse" value="your custom message"/>

            <input type="text" name="name" placeholder="Name..." required/>
            <input type="tel" name="phone" placeholder="Phone..." required />
            <input type="date" name="date" required />
            <input type="mail" name="mail" placeholder="your@email.com" required/>
            <input type="submit" value="Request Janitor" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
