import React, { useState, useEffect } from "react";
import "./form.css";

function FormContainer() {
  const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);

  const [formFlag, setFormFlag] = useState({
    flag1: false,
    flag2: false,
    flag3: false,
  });
  const mobileNumber = "+543513110502";
  const [disable, setDisable] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumberClient: "",
    address: "",
    email: "",
    message: "",
  });

  const { firstName, lastName, mobileNumberClient, address, email, message } =
    formData;
  const { flag1, flag2, flag3 } = formFlag;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // setFormFlag(!flag2)
  };

  useEffect(() => {
    console.log(formData);
    if (mobileNumber.length < 1) {
      setNumberEmptyError(true);
      setTimeout(() => setNumberEmptyError(false), 3000);
    } else if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } else {
      // TODO: Enter code here
      // Regex expression to remove all characters which are NOT alphanumeric
      let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

      // Appending the phone number to the URL
     // let url = `https://web.whatsapp.com/send?phone=${number}`;
      let url = `https://wa.me/${number}?`;

      // Appending the message to the URL by encoding it
      url += `&text=${encodeURI(message)}&app_absent=0`;
      // Open our newly created URL in a new tab to send the message
      window.open(url);
      setDisable(false);
    }
  }, [flag1]);

  const toggle = () => {
    setFormFlag(!flag1);
    setDisable(true);
  };

  return (
    <section className="main-form">
      <div className="container-Saber">
        <div className="content-form">
          <div className="div-descriptionSaber">
            <h1 className="descriptionSaber">
              <br />
              <span className="line-1-form">Me gustaría saber de usted </span>
              <br />
              <span className="line-2-form">
                Cuando necesite una ayuda, <br />
                no dude en contactarme.
                <br />
              </span>
              <br />
              <span className="line-3-form">
                Dirk Kloosterman 1355 B SMATA
                <br />
              </span>

              <span className="line-3-form">
                Córdoba,Argentina
                <br />
              </span>

              <span className="line-3-form">
                i.h.m.p.servicio@gmail.com
                <br />
              </span>

              <span className="line-3-form">
                +54 351 3110502
                <br />
              </span>
            </h1>
          </div>

          <form className="form">
            <ul>
              <li>
                <label for="firstName">First name : </label>

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={onChange}
                />
              </li>
              <li>
                <label for="lastName">Last name : </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={onChange}
                />
              </li>
              <li>
                <label for="mail">E-mail:</label>
                <input
                  type="email"
                  id="mail"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </li>
              <li>
                <label for="address"> Address : </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={onChange}
                />
              </li>
              <li>
                <label for="mobileNumberClient"> Phone : </label>
                <input
                  type="text"
                  id="mobileNumberClient"
                  name="mobileNumberClient"
                  value={mobileNumberClient}
                  onChange={onChange}
                />
              </li>
              <li>
                <label for="msg">Message:</label>
                <textarea
                  id="msg"
                  name="message"
                  required
                  value={message}
                  onChange={onChange}
                ></textarea>
              </li>

              <li class="button">
              
                <button
                  type="submit"
                  className="button"
                  disabled={disable}
                  onClick={toggle}
                >
                  Enviar
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormContainer;
