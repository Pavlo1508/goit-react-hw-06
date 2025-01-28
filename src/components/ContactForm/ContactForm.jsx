import s from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import * as Yup from "yup";

const INITIAL_STATE = {
	name: '',
	number: '',
}

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[A-Za-zА-Яа-яЁё\s]+$/,
      "Ім'я може містити тільки літери та пробіли"
    )
    .min(3, "Ім'я має бути довшим ніж 3 літери")
    .max(50, "Ім'я має бути корочшим ніж 50 літер")
    .required("Впишіть ім'я"),
  number: Yup.string()
    .matches(/^[\d-]+$/, "Номер телефону може містити тільки цифри та дефіси")
    .min(3, "Номер телефону має бути довшим ніж 3 літери")
    .max(50, "Номер телефону має бути корочшим ніж 50 літер")
    .required("Впишіть номер телефону"),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    onAddContact(newContact);

    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={INITIAL_STATE}
        validationSchema={validationSchema}
      >
        {({ isValid, dirty }) => (
          <Form className={s.form}>
            <label className={s.label}>
              <span>Name</span>
              <Field
                className={s.input}
                name="name"
                pattern="^[A-Za-zА-Яа-яЁё\s]+$"
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component="div" className={s.error} />
            </label>

            <label className={s.label}>
              <span>Number</span>
              <Field
                className={s.input}
                name="number"
                placeholder="Enter your number"
              />
              <ErrorMessage name="number" component="div" className={s.error} />
            </label>

            <button
              type="submit"
              className={s.button}
              disabled={!isValid || !dirty}
            >
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm