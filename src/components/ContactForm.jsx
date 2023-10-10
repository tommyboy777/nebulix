
const ContactForm = () => {


  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    //formData.append("access_key", "a9ff9332-1706-489d-8caf-047bc90af211");
    formData.append("access_key", "bbb170f7-d162-4459-aa57-c5992f6509f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      alert("Hamarosan felvesszük Önnel a kapcsolatot!");
      router.push("/");
    }
  }

  return (
    <div className="container " data-aos="fade-up" T>
      <div className="my-5 text-center">
        <h1>
          <strong> KAPCSOLAT </strong>
        </h1>
        <h3>LÉPJEN KAPCSOLATBA VELÜNK!</h3>
      </div>
      <div className="form-style-one" data-aos="fade-up">
        <form onSubmit={handleSubmit}>
          <div className="messages" />
          <div className="row controls m-5">
                <input  className="w-full text-black" type="text" placeholder="Név*" name="name" required="required" data-error="Name is required." />
                <div className="help-block with-errors" />
              </div>
          <div className="row controls m-5">

                <input  className="w-full text-black"
                  type="email"
                  placeholder="Email cím*"
                  name="email"
                  required="required"
                  data-error="Valid email is required."
                />
                <div className="help-block with-errors" />
          </div>
          <div className="row controls m-5 text-black">
                <textarea className="w-full  "
                  placeholder="Üzenet*"
                  name="message"
                  required="required"
                  data-error="Please,leave us a message."
                  defaultValue={""}
                />
                <div className="help-block with-errors" />
            {/* End .col-12 */}
          </div>
          <div className="row controls w-full  text-center center">
     
              <button className="btn-secondary   text-center bg-slate-500 mx-auto block btn fw-500 ">Beküldés </button>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
