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
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-zinc-700 rounded-md w-4/5 max-w-sm mx-auto p-4"
          >
            <Field name="name" type="text" placeholder="Nombre" className="bg-zinc-800 rounded p-2" />
            <Field name="type" type="text" placeholder="Tipo" className="bg-zinc-800 rounded p-2" />
            <Field name="hp" type="number" placeholder="Hp" className="bg-zinc-800 rounded p-2" />
            <Field name="attack" type="text" placeholder="Ataque" className="bg-zinc-800 rounded p-2" />
            <Field name="special" type="text" placeholder="Especial" className="bg-zinc-800 rounded p-2" />
            <input type="file" className="bg-zinc-800 rounded p-2 text-sm cursor-pointer file:bg-white file:border-0 file:rounded file:font-semibold file:mr-2 file:p-1 file:px-2 file:cursor-pointer file:transition-colors hover:file:bg-zinc-300" />
            <button type="submit" className="bg-cyan-300 rounded-md text-black font-semibold p-2 transition-colors hover:bg-white">Enviar</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PokemonsForm;