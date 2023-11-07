import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

// // паттерн для проверки номера
// const phoneRegExp =
//   /^\+?\d{1,4}?[ .-]?(\(\d{1,3}\))?([ .-]?\d{1,4}){1,4}([ .-]?\d{1,9})?$/;

// // паттерн для проверки имени
// const nameRegExp =
//   "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

// // валидация формы через библиотеку Yup
// const SignupSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .matches(nameRegExp, 'Неверный ввод')
//     .required('Заполните поле'),
//   number: Yup.string()
//     .min(7, 'Too Short!')
//     .matches(phoneRegExp, 'Неверный ввод')
//     .required('Заполните поле'),
// });

export const Phonebookform = ({ addContacts }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      // validationSchema={SignupSchema}
      onSubmit={values => {
      
        const keyId = nanoid();
        const keyId1 = { key: keyId };

        const object = { ...values, ...keyId1 };

        addContacts(object);
      }}
    >
      <Form>
        <label>
          Name
          <Field name="Name" placeholder="Olena" />
          {/* <ErrorMessage name="Name" component="div" /> */}
        </label>

        <label>
          Number
          <Field type="tel" name="number" placeholder="111-11-11" required />
          {/* <ErrorMessage name="Number" component="div" /> */}
        </label>

        <button type="submit">Добавить контакт</button>
      </Form>
    </Formik>
  );
};
