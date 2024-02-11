import PropTypes from 'prop-types';
  

function Filter({handleFilter}) {
    const handleInputCharacter = (event) => {
      handleFilter('character', event.currentTarget.value);
    };
    const handleInputQuote = (event) => {
      handleFilter('quote', event.currentTarget.value);
    };

    return (
      <form className="filter">
        <label className="filter__label" htmlFor="">
          Filtrar por frase:
          <input 
          className="filter__input" 
          type="text"
          onInput={handleInputQuote}
          />
        </label>
        <label className="filter__label" htmlFor="">
          Filtrar por personaje:
          <select
            className="filter__select"
            name="Character"
            id="Character"
            onInput={handleInputCharacter}
          >
            <option value="Todos">Todos</option>
            <option value="Ross">Ross</option>
            <option value="Joey">Joey</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Chandler">Chandler</option>
            <option value="Rachel">Rachel</option>
            <option value="Mónica">Mónica</option>
          </select>
        </label>
      </form>
    );
}
Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;