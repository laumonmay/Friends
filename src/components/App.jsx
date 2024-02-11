import '../scss/App.scss';
import { useState } from 'react';
import dataQuotes from '../data/quotes.json'; //import para pasarselo a quotesList

import AddCharacter from './AddCharacter';
import Filter from './Filter';
import Header from './Header';
import QuotesList from './QuotesList';


function App() {
  const[quotesList] = useState(dataQuotes); //es muy importante, antes de nada, guardar los datos de la importacion de dataQuotes en una variable de estado


  const[filterCharacter,setFilterCharacter] = useState("Todos");
  const[filterQuote,setFilterQuote] = useState(" ");

  const handleFilter = (filterName, value) =>{
    
    if(filterName === 'quote') {
      setFilterQuote(value);
    }
    else if(filterName === 'character'){
      setFilterCharacter(value);
    }
  };


  const filteredQuotes = 
  quotesList
  .filter(quote => quote.quote.toLowerCase().includes(filterQuote.toLowerCase()))
  .filter (quote =>  {
    if(filterCharacter === "Todos"){
      return quotesList;
    }
    else {
      return quote.character === filterCharacter;
    }
    });
    
  
  return (
    <div className='page'>
     <Header/>
     <main>
      <Filter handleFilter ={handleFilter}/>
      <QuotesList quotesList = {filteredQuotes}/>
      <AddCharacter/>
     </main>
    </div>
  )
}

export default App
