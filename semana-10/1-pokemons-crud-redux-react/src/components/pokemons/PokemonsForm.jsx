import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSubmitPokemonsForm } from '../../redux/slices/pokemons.slices';

const PokemonsForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { pokemon } = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  const [formPokemon, setFormPokemon] = useState({
    name: '',
    type: '',
    hp: '',
    attack: '',
    special: '',
    image: {}
  });

  useEffect(() => {
    if (id && pokemon._id) {
      setFormPokemon(pokemon);
    }
  }, [id, pokemon]);

  return (
    <Formik
      initialValues={formPokemon}
      enableReinitialize
      validationSchema={yup.object({
        name: yup.string().required('El nombre es requerido'),
        type: yup.string().required('El tipo es requerido'),
        hp: yup.number().required('El Hp es requerido').positive().integer(),
        attack: yup.string().required('El ataque es requerido'),
        special: yup.string().required('El especial es requerido')
      })}
      onSubmit={async (values, actions) => {
        await dispatch(fetchSubmitPokemonsForm(values));
        actions.setSubmitting(false);
        actions.resetForm();
        navigate('/pokemons');
      }}
    >
      {({ handleSubmit, setFieldValue, isSubmitting }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-zinc-700 rounded-md w-4/5 max-w-sm mx-auto p-4"
          >
            <div className="flex flex-col gap-1">
              <Field name="name" type="text" placeholder="Nombre" className="bg-zinc-800 rounded p-2" required />
              <ErrorMessage name="name" component="span" className="text-rose-500 text-sm text-center" />
            </div>
            <div className="flex flex-col gap-1">
              <Field name="type" type="text" placeholder="Tipo" className="bg-zinc-800 rounded p-2" required />
              <ErrorMessage name="type" component="span" className="text-rose-500 text-sm text-center" />
            </div>
            <div className="flex flex-col gap-1">
              <Field name="hp" type="number" placeholder="Hp" className="bg-zinc-800 rounded p-2" required />
              <ErrorMessage name="hp" component="span" className="text-rose-500 text-sm text-center" />
            </div>
            <div className="flex flex-col gap-1">
              <Field name="attack" type="text" placeholder="Ataque" className="bg-zinc-800 rounded p-2" required />
              <ErrorMessage name="attack" component="span" className="text-rose-500 text-sm text-center" />
            </div>
            <div className="flex flex-col gap-1">
              <Field name="special" type="text" placeholder="Especial" className="bg-zinc-800 rounded p-2" required />
              <ErrorMessage name="special" component="span" className="text-rose-500 text-sm text-center" />
            </div>
            <input
              type="file"
              name="image"
              className="bg-zinc-800 rounded p-2 text-sm cursor-pointer file:bg-white file:border-0 file:rounded file:font-semibold file:mr-2 file:p-1 file:px-2 file:cursor-pointer file:transition-colors hover:file:bg-zinc-300"
              onChange={(e) => setFieldValue('image', e.currentTarget.files[0])}
              required={id ? false : true}
            />
            <button
              type="submit"
              className="bg-cyan-300 rounded-md text-black font-semibold p-2 transition-colors hover:bg-white disabled:bg-white/50 disabled:cursor-progress"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Loading 💭' : id ? 'Editar' : ' Crear'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PokemonsForm;