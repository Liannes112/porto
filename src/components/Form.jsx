import React from "react";
import { useFormik } from 'formik'
import * as yup from 'yup'

const Form = () => {
  const registerUser = () => {
    alert("Form Submitted")
  }
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      text: ""
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      name: yup.string().required("Nama perlu diisi").min(3).max(12),
      email: yup.string().required("Email wajib diisi").email(),
      text: yup.string().required("Text wajib diisi").min(3),
    })
  })
  
  const handleForm = (event) => {
    const { target } = event
    formik.setFieldValue(target.name, target.value)
  }
  
  return (
    <section id="contact" className="pt-36 pb-32 mb-12 min-h-[80vh] bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="font-semibold text-lg text-langit">Contact</h4>
            <h2 className="font-bold text-slate-900 text-3xl mb-4">Contact Me</h2>
            <p className="font-medium text-md text-slate-500">Jika anda memiliki pertanyaan lebih lanjut mengenai saya, anda dapat mengirim pesan pada saya dengan mengisi form berikut ini</p>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full px-4 mb-8 lg:w-2/3 lg:mx-auto">
            <label className="text-base font-bold text-langit">Name</label>
            <input
              onChange={handleForm}
              type="text"
              name="name"
              id="name"
              className={`w-full bg-slate-200 text-slate-900 px-3 py-5 rounded-md focus:outline-none focus:border focus:border-blue ${formik.errors.name ? 'border border-red-500' : ''}`}
            />
            {formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}
          </div>
          <div className="w-full px-4 mb-8 lg:w-2/3 lg:mx-auto">
            <label className="text-base font-bold text-langit">Email</label>
            <input
              onChange={handleForm}
              type="email"
              name="email"
              id="email"
              className={`w-full bg-slate-200 text-slate-900 px-3 py-5 rounded-md focus:outline-none focus:border focus:border-blue ${formik.errors.email ? 'border border-red-500' : ''}`}
            />
            {formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}
          </div>
          <div className="w-full px-4 mb-8 lg:w-2/3 lg:mx-auto">
            <label className="text-base font-bold text-langit">Text</label>
            <input
              onChange={handleForm}
              type="text"
              name="text"
              id="text"
              className={`w-full bg-slate-200 text-slate-900 px-3 py-14 rounded-md focus:outline-none focus:border focus:border-blue ${formik.errors.text ? 'border border-red-500' : ''}`}
            />
            {formik.errors.text && <p className="text-red-500">{formik.errors.text}</p>}
          </div>
          <div className="w-full px-4 mb-8 lg:w-2/3 lg:mx-auto">
            <button
              type="submit"
              className="text-base font-semibold text-white bg-langit py-3 px-8 rounded-full w-full hover:opacity-70 hover:shadow-lg transition duration-500"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
