
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
    }
  }

  return (
    <div className="container " data-aos="fade-up" T>


    </div>
  );
};

export default ContactForm;
