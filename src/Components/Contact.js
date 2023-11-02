import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState,useContext } from "react";
import { GlobalContext } from "../Contex/GlobalContext";
import emailjs from "@emailjs/browser";
import SuccessBox from "./SuccessBox";
import "../Styles/LodingSVG.css"

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { emailStatus, setEmailStatus } = useContext(GlobalContext);
  const [loading,setLoading] =  useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Please enter your name."),
    email: yup
      .string()
      .email("Please enter correct Email.")
      .required("Please enter correct Email."),
    subject: yup.string().required("Please write some subject."),
    message: yup.string().required("Please write some message."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (e) => {
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
          
          clearForm();
        },
        (error) => {
          setEmailStatus(false);
          alert(error.text);
        }
      );
      
  };

  const clearForm = () => {
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
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

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
              <form id="form" ref={form} onSubmit={handleSubmit(submitForm)}>
                <span className="redAstrick">*</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  {...register("name")}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <p className="errorMessage">{errors.name?.message}</p>
                <span className="redAstrick">*</span>
                <input
                  // type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  {...register("email")}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <p className="errorMessage">{errors.email?.message}</p>
                <span className="redAstrick">*</span>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-control mt-3"
                  placeholder="Subject"
                  {...register("subject")}
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
                <p className="errorMessage">{errors.subject?.message}</p>
                <span className="redAstrick">*</span>
                <div className="mb-3 mt-3">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={5}
                    placeholder="Message"
                    {...register("message")}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  <p className="errorMessage">{errors.message?.message}</p>
                </div>
                <button
                  type="submit"
                  name="submit"
                  className="btn  btn-primary mt-3"
                >
                  Contact Me
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
{/* Loading SVG */}




{loading ? <div id="loading-svg"></div>:<p ></p>}
      {/* Success Box */}

      {emailStatus ? <SuccessBox /> : <p></p>}



   
     

     
    </>
  );
}

export default Contact;
