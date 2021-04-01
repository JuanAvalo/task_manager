import React from 'react';
import {Message} from 'semantic-ui-react';

const QuoteDetail = ({selQuote}) => {

    return(
        <Message
            color="white"
            icon="idea"
            header={selQuote.author + " said:"}
            content={selQuote.text}
            //<p>Quote: {selQuote.text}</p>
            //<p>Author: {selQuote.author}</p>
        />
    )
}

export default QuoteDetail;