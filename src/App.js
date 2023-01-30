import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Form, Button, Card, } from "react-bootstrap";
import './App.css';

function App() {

  const getFormatedDate = (currentDate) => {
    return currentDate.split('/').reverse().join('-');
  }

  const schema = yup.object().shape({
    name: yup.string()
      .required()
      .matches(/^([a-zA-Zà-úÀ-Ú]|\s+)+$/, "somente letras"),
    phone: yup
      .string()
      .required()
      .matches(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/, "somente números"),
    email: yup
      .string()
      .email()
      .required(),
    date: yup.date().min(getFormatedDate('2023', "Coloque uma data superior"))
      .required()
  });
  return (

    <div className="App">
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          name: "",
          phone: "",
          email: "",
          date: "",
        }}
      >

        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Card style={{ width: '90%', marginLeft: '50px', marginTop: '50px' }}>

            <Card.Body>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group md="" controlId="validationFormik01">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Coloque seu nome"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group md="" controlId="Phone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Coloque seu telefone"
                    value={values.phone}
                    onChange={handleChange}
                    isValid={touched.phone && !errors.phone}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Coloque seu email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group md="" controlId="date">
                  <Form.Label>Data</Form.Label>
                  <Form.Control
                    type="text"
                    name="date"
                    placeholder="Coloque uma data"
                    value={values.date}
                    onChange={handleChange}
                    isValid={touched.date && !errors.date}
                    isInvalid={!!errors.date}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.date}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="success" type="submit">Enviar</Button>
              </Form>
            </Card.Body>
          </Card>
        )}
      </Formik>
    </div>
  );
}

export default App;
