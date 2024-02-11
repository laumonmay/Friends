function AddCharacter() {

    return (
      <form className="addCharacter">
        <h2 className="addCharacter__title">Añade una nueva frase</h2>
        <label className="addCharacter__label" htmlFor="">
          Frase
          <input className="addCharacter__input" type="text" />
        </label>
        <label className="addCharacter__label" htmlFor="">
          Personaje
          <input className="addCharacter__input" type="text" />
        </label>
        <button className="button">Añadir nueva frase</button>
      </form>
    );
}

export default AddCharacter;