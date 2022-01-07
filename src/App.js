import { Formik, Form, Field, ErrorMessage } from "formik";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import TextInput from "./components/TextInput";
import Select from "./components/Select";

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

  if (!values.radio) {
    errors.radio = "Requerido";
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
        mascota: "",
        radio: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre: " />
        <br />
        <TextInput name="lastname" label="Apellido: " />
        <br />
        <TextInput name="email" label="Email: " />
        <br />
        <Select label="Nombre Mascota" name="mascota">
          <option value="">Selecciona Mascota</option>
          <option value="orion">Orion</option>
          <option value="Tristan">Tristan</option>
          <option value="Guido">Guido</option>
        </Select>
        <Checkbox name="accept">Aceptar terminos y condiciones</Checkbox>
        <Radio name="radio" value="orion" label="Orion" />
        <Radio name="radio" value="tristan" label="Tristan" />
        <Radio name="radio" value="guido" label="Guido" />
        <ErrorMessage name="radio" />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
