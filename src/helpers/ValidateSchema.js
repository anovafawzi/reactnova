/*
  Description: This is yup validator helper mainly for final-form
  Usage example: use on final-form validate

  const schema = yup.object({
    name: yup.string().required(),
    surname: yup.string().required(),
  });

  const UserForm = ({ onSubmit }) => (
    <Form
      onSubmit={onSubmit}
      validate={values => ValidateSchema(values, schema)}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Field name="name" placeholder="name" component="input" />
          <Field name="surname" placeholder="surname" component="input" />
          <button type="submit" >Submit</Button>
        </form>
      )}
    />
  );

  */

import { setIn } from 'final-form';

const ValidateSchema = async (values, schema) => {
  if (typeof schema === 'function') {
    schema = schema();
  }

  try {
    await schema.validate(values, { abortEarly: false });
  } catch (e) {
    return e.inner.reduce((errors, error) => {
      return setIn(errors, error.path, error.message);
    }, {});
  }
};

export default ValidateSchema;
