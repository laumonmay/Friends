import PropTypes from 'prop-types';
  

function QuoteItem({text, author}) {

    return (
      <h3>
        <span className="list__quote">{text}</span>
        -<span className="list__character">{author}</span>
      </h3>
    );
}

QuoteItem.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
};

export default QuoteItem;