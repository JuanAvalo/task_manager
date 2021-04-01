import React from 'react';
import {Button} from 'semantic-ui-react';

const QuoteMenu = ({setRandom, saveQuote}) => {
    return (
        <div>
            <Button color="orange" onClick={()=> setRandom()}>Get a new Quote!</Button>
            <Button icon="download" color="blue" onClick={()=> saveQuote()} ></Button>
            
        </div>
    )
}

export default QuoteMenu;