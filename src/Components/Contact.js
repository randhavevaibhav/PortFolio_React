import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessBox from "./SuccessBox";
import { GlobalContext } from "../Contex/GlobalContext";
import { useContext } from "react";


function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { emailStatus, setEmailStatus } = useContext(GlobalContext);

  const { loading, setLoading } = useContext(GlobalContext);
  console.log("email staus ---> " + emailStatus);

  const submitForm = (e) => {
    console.log("inside the submit form function !!!!!");
    setLoading(true);
    emailjs
      .sendForm(
        "service_c3dxqkn",
        "template_bku63lp",
        form.current,
        "nlnn8xsJtHE9hrrh5"
      )
      .then(
        (result) => {
          setLoading(false);
          setEmailStatus(true);
        },
        (error) => {
          setEmailStatus(false);
          alert(error.text);
        }
      );
  };

  const checkFormFields = (event) => {
    if (
      name !== null &&
      name !== "" &&
      email !== null &&
      email !== "" &&
      subject !== null &&
      subject !== "" &&
      message !== null &&
      message !== ""
    ) {
      submitForm(event);
    } else {
      alert("Please input all the form fields !!");
    }
  };

  // for bootstrap css
  (function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  return (
    <>
      <div>
        <section className="container mt-3 section" id="contact">
          <h1 className="text-center">Contact Me</h1>
          <div className="row mt-4">
            <div className="col-lg-6">
              {/* to edit google map go to https://www.embed-map.com type your location, generate html code and copy the html  */}
              <div
                style={{
                  maxWidth: "100%",
                  overflow: "hidden",
                  color: "red",
                  width: 500,
                  height: 500,
                }}
              >
                <div
                  id="embedmap-canvas"
                  style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                >
                  <iframe
                    style={{ height: "100%", width: "100%", border: 0 }}
                    frameBorder={0}
                    src="https://www.google.com/maps/embed/v1/place?q=Pune&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  ></iframe>
                </div>
                <a
                  className="googlemaps-html"
                  href="https://www.embed-map.com"
                  id="get-data-forembedmap"
                >
                  https://www.embed-map.com
                </a>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "#embedmap-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}\n                  ",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/* form fields */}
              {/* onSubmit={handleSubmit(submitForm)} */}
              <form className="needs-validation" noValidate ref={form}>
                {/* <span className="redAstrick">*</span> */}
                <label
                  htmlFor="validationCustom01"
                  className="form-label redAstrick"
                >
                  *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  required
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <div className="invalid-feedback">
                  Please type your name.
                </div>

                <label
                  htmlFor="validationCustom02"
                  className="form-label redAstrick"
                >
                  *
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustom01"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <div className="invalid-feedback">
                  Please provide a valid Email.
                </div>

                <label
                  htmlFor="validationCustom03"
                  className="form-label redAstrick"
                >
                  *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  required
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
                <div className="invalid-feedback">
                  Please provide a valid Subject.
                </div>

                <label
                  htmlFor="validationCustom04"
                  className="form-label redAstrick"
                >
                  *
                </label>

                <div className="mb-3 mt-3">
                  <textarea
                    className="form-control"
                    id="validationCustom04"
                    required
                    placeholder="Message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Message.
                  </div>
                </div>
                <button
                  type="submit"
                  name="submit"
                  className="btn  btn-primary mt-3"
                  onClick={(event) => {
                    checkFormFields(event);
                  }}
                >
                  Contact Me
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Success Box */}

      {emailStatus ? <SuccessBox /> : <p></p>}
    </>
  );
}

export default Contact;
