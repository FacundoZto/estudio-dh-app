import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const schema = Yup.object({
  name: Yup.string().required('El nombre es obligatorio').min(3, 'Mínimo 3 caracteres'),
  lastname: Yup.string().required('El apellido es obligatorio'),
  email: Yup.string().email('Email inválido').required('El email es obligatorio'),
  phone: Yup.string().matches(/^\d+$/, "Solo se permiten números").max(15, "El teléfono no puede superar los 15 dígitos").required("El teléfono es obligatorio"),
  message: Yup.string().required('El mensaje es obligatorio').min(10, 'El mensaje debe tener al menos 10 caracteres')
})

const Contact = () => {
  const [submitted, setSubmitted] = useState('');

  const handleSubmit = async (values, { resetForm }) => {
    console.log('Formulario enviado:', values);
    try {
      const response = await fetch('http://localhost:5000/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        setSubmitted('Mensaje enviado con éxito');
        resetForm();
      } else {
        setSubmitted('Hubo un error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitted('Error de conexión, por favor intente más tarde');
    }

    setTimeout(() => {
      setSubmitted('');
    }, 4000);

  };

  return (
    <section className="bg-light py-5" id="contacto">
      <div className="container px-5 my-5 px-5">
        <div className="text-center mb-5">
          <h2 className="fw-bolder">Escribinos para recibir nuestra ayuda</h2>
        </div>

        <div className="row gx-5 justify-content-center">
          <div className="col-lg-6">
            <Formik
              initialValues={{
                name: '',
                lastname: '',
                email: '',
                phone: '',
                message: '',
              }}
              validationSchema={schema}
              onSubmit={handleSubmit}
            >
              {
                ({ errors, touched }) => (
                  <Form>
                    <div className="form-floating mb-3">
                      <Field
                        name="name"
                        id="name"
                        type="text"
                        placeholder=""
                        className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                      />
                      <label
                        htmlFor="name"
                      >Nombre</label>
                      <ErrorMessage
                        name='name'
                        component='div'
                        className='text-danger' />
                    </div>

                    <div className="form-floating mb-3">
                      <Field
                        name="lastname"
                        id="lastname"
                        type="text"
                        placeholder=""
                        className={`form-control ${touched.lastname && errors.lastname ? 'is-invalid' : ''}`}
                      />
                      <label
                        htmlFor="lastname"
                      >Apellido</label>
                      <ErrorMessage
                        name='lastname'
                        component='div'
                        className='text-danger' />
                    </div>

                    <div className="form-floating mb-3">
                      <Field
                        name="email"
                        id="email"
                        type="email"
                        placeholder=""
                        className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                      />
                      <label
                        htmlFor="email"
                      >Email</label>
                      <ErrorMessage
                        name='email'
                        component='div'
                        className='text-danger' />
                    </div>

                    <div className="form-floating mb-3">
                      <Field
                        name="phone"
                        id="phone"
                        type="tel"
                        placeholder=""
                        className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                      />
                      <label
                        htmlFor="phone"
                      >Teléfono</label>
                      <ErrorMessage
                        name='phone'
                        component='div'
                        className='text-danger' />
                    </div>

                    <div className="form-floating mb-3">
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        className={`form-control ${touched.message && errors.message ? 'is-invalid' : ''}`}
                        placeholder=" "
                        style={{ height: '120px' }}
                      />
                      <label htmlFor="message">Mensaje</label>
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="invalid-feedback" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg w-100">Enviar</button>
                    {
                      submitted &&
                      <div className="alert alert-info my-2 position-absolute" role="alert">
                        {submitted}
                      </div>
                    }
                  </Form>
                )
              }
            </Formik>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact;