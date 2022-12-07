import imageFloral from "../../assets/images/PC-contact-us.png";

const Contact = () => {
  return (
    // Contact page container
    <section className="container w-full mx-auto text-stone-800 flex justify-center items-center md:p-4 ">
      {/* container to place form and text */}
      <div className="flex flex-col justify-center items-center px-6 pt-4 py-4 md:py-8 sm:pt-[30px] mx-auto ">
        {/* before the form header */}
        <div className="text-center">
          <h2 className="text-4xl inline border-b-4 border-pcCoral py-2">
            Contact
          </h2>
          <p className="py-6">
            Please use our contact form if you have feedback for us.
          </p>
        </div>
        <div className="relative flex flex-col w-full mx-auto m-6 space-y-10 shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
          {/* Left Side */}
          {/* form */}
          <form
            method="POST"
            action="https://getform.io/f/c6d10b7a-c13f-4d15-a5fd-668f649782f1"
            className="form-container md:w-96"
          >
            <div className="form-inner-container ">
              {/* name */}
              <div>
                <label for="name" className="block pt-3 ">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-field focus: outline-pcGreen"
                />
              </div>
              {/* email */}
              <div>
                <label for="email" className="block ">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-field focus: outline-pcGreen"
                />
              </div>
              {/* message */}
              <div>
                <label for="message" className="block text-stone-800">
                  Your message
                </label>
                <textarea
                  name="message"
                  rows="8"
                  className="form-field focus: outline-pcGreen"
                />
              </div>
              {/* button */}
              <div className="flex items-center md:items-start">
                <button className="form-button">Submit</button>
              </div>
            </div>
          </form>

          {/* Right Side */}
          <img
            src={imageFloral}
            alt="floral"
            className="w-[430px] hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
