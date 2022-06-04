import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchDeletePokemon } from "../../redux/slices/pokemons.slices";

const PokemonsCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const { _id, name, type, hp, attack, special, image } = pokemon;

  const handleDelete = () => {
    Swal.fire({
      title: '¿Está seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      background: '#20232a',
      color: '#fff',
      showCancelButton: true,
      confirmButtonColor: '#61dafb80',
      cancelButtonColor: '#dc143c',
      confirmButtonText: '¡Sí, elimínalo!',
      cancelButtonText: '¡No, cancélalo!',
      reverseButtons: true,
      timer: 5000
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(fetchDeletePokemon(_id));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          {
            title: 'Cancelado',
            text: 'Tu registro está seguro',
            icon: 'error',
            background: '#20232a',
            color: '#fff',
            confirmButtonColor: '#61dafb80',
            confirmButtonText: 'Cerrar',
            timer: 2500
          }
        );
      }
    });
  };

  return (
    <div
      className="flex flex-col items-center gap-4 bg-zinc-700 rounded-lg shadow shadow-cyan-300 transition-colors w-full max-w-xs p-4 hover:shadow-yellow-400"
    >
      <figure className="w-32 h-32">
        <img src={image.url} alt={name} className="w-full h-full object-cover" />
      </figure>
      <div className="flex flex-col gap-1 text-center">
        <p className="text-zinc-400 text-sm font-thin">Hp: {hp}</p>
        <h5 className="text-white text-xl font-medium">{name}</h5>
        <p className="text-zinc-400 text-sm font-extralight">{type}</p>
      </div>
      <div className="flex gap-1">
        <span className="bg-zinc-800 rounded-xl text-white text-sm px-3 py-1">{attack}</span>
        <span className="bg-zinc-800 rounded-xl text-white text-sm px-3 py-1">{special}</span>
      </div>
      <div className="flex gap-2">
        <Link to={`${_id}`} className="bg-cyan-300 rounded-md text-black font-medium px-3 py-1 transition-colors hover:bg-white">
          Editar
        </Link>
        <button
          className="bg-rose-500 rounded-md text-white font-medium px-3 py-1 transition-colors hover:bg-rose-600"
          onClick={() => handleDelete(_id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PokemonsCard;