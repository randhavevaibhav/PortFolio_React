import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup'; 
import {yupResolver} from '@hookform/resolvers/yup';

function Contact() {
 
  const schema = yup.object().shape({
      name: yup.string().required("Please enter your name."),
      email: yup.string().email("Please enter correct Email.").required("Please enter correct Email."),
      subject: yup.string().required("Please write some subject."),
      message: yup.string().required("Please write some message."),

  })
  const {register,handleSubmit, formState:{errors}} = useForm({
    resolver:yupResolver(schema),
  });
  const onSubmit = (data)=>
  {
     
      //handel submit
  }
  
    return (
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
            height: 500
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
                "#embedmap-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}\n                  "
            }}
          />
        </div>
      </div>
      <div className="col-lg-6">
        {/* form fields */}
        <form id="form" method="post" onSubmit={handleSubmit(onSubmit)}>
          <span className='redAstrick'>*</span>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Name"
            {...register("name")}
          />
          <p className='errorMessage'>{errors.name?.message}</p>
          <span className='redAstrick'>*</span>
          <input
            // type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email"
            {...register("email")}
          />
           <p className='errorMessage'>{errors.email?.message}</p>
           <span className='redAstrick'>*</span>
          <input
            type="text"
            name="subject"
            id="subject"
            className="form-control mt-3"
            placeholder="Subject"
            {...register("subject")}
          />
          <p className='errorMessage'>{errors.subject?.message}</p>
          <span className='redAstrick'>*</span>
          <div className="mb-3 mt-3">
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows={5}
              placeholder="Message"
              defaultValue={""}
              {...register("message")}
            />
            <p className='errorMessage'>{errors.message?.message}</p>
          </div>
          <button type="submit" name="submit" className="btn btn-success mt-3">
            Contact Me
          </button>
        </form>
      </div>
    </div>
  </section>
        </div>
    );
}

export default Contact;