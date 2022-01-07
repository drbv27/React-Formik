import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "./components/TextInput";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "Requiere al menos 6 caracteres";
  }
  if (!values.lastname) {
    errors.lastname = "Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "Requiere al menos 6 caracteres";
  }
  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre: " />
        {/*         <label>Nombre: </label>
        <Field type="text" name="name" className="input" /> */}

        <br />
        <label>Apellido: </label>
        <Field type="text" name="lastname" />
        <ErrorMessage name="lastname" />
        <br />
        <label>Email: </label>
        <Field type="text" name="email" />
        <ErrorMessage name="email" />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
