import QuoteItem from "./QuoteItem";
import PropTypes from 'prop-types';
  


function QuotesList({quotesList}) {

  const quotesHtml = quotesList.map((quote, index) => (
    <li key= {index} className="list__li">
      <QuoteItem text={quote.quote} author={quote.character} />
    </li>
  ));

    return (
      <ul className="list">
        {quotesHtml}
      </ul>
    );
}
QuotesList.propTypes = {
  quotesList: PropTypes.array,
  }

export default QuotesList;