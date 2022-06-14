let alertTimeId = 0;

export const showError = (error, pokemonError) => {
  return ((dispatch) => {
    clearTimeout(alertTimeId);
    dispatch(pokemonError(error));
    alertTimeId = setTimeout(() => {
      dispatch(pokemonError({}));
    }, 5000);
  });
};