import { Field, Form, Formik } from 'formik';

const PokemonsForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        type: '',
        hp: '',
        attack: '',
        special: '',
        image: {}
      }}
      enableReinitialize
      onSubmit={async (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ handleSubmit, setFieldValue, isSubmitting }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-zinc-700 rounded-md w-4/5 max-w-sm mx-auto p-4"
          >
            <Field name="name" type="text" placeholder="Nombre" className="bg-zinc-800 rounded p-2" required />
            <Field name="type" type="text" placeholder="Tipo" className="bg-zinc-800 rounded p-2" required />
            <Field name="hp" type="number" placeholder="Hp" className="bg-zinc-800 rounded p-2" required />
            <Field name="attack" type="text" placeholder="Ataque" className="bg-zinc-800 rounded p-2" required />
            <Field name="special" type="text" placeholder="Especial" className="bg-zinc-800 rounded p-2" required />
            <input
              type="file"
              name="image"
              className="bg-zinc-800 rounded p-2 text-sm cursor-pointer file:bg-white file:border-0 file:rounded file:font-semibold file:mr-2 file:p-1 file:px-2 file:cursor-pointer file:transition-colors hover:file:bg-zinc-300"
              onChange={(e) => setFieldValue('image', e.currentTarget.files[0])}
              required
            />
            <button
              type="submit"
              className="bg-cyan-300 rounded-md text-black font-semibold p-2 transition-colors hover:bg-white disabled:bg-white/50 disabled:cursor-progress"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Loading 💭' : 'Enviar'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PokemonsForm;