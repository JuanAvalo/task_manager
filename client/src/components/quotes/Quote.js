import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QuoteDetail from './QuoteDetail';
import QuoteMenu from './QuoteMenu';
import LoadingComponent from '../handlers/LoadingComponent';
import ErrorComponent from '../handlers/ErrorComponent';

const Quote = ({date}) => {

    const [quotes, setQuotes] = useState ([]);
    const [selectedQuote, setSelectedQuote] = useState ({'text':'','author':''});
    const [loading, setLoading] = useState (false);
    const [error, setError] = useState (false);
    
    //GET quotes from external API.
    useEffect(() => {
        const getQuotes = async () => {
            try{
                setError(false)
                setLoading(true);
                const result = await axios ('https://type.fit/api/quotes');
                setQuotes(result.data);
            }
            catch(error) {
                setError(true);
            }
            finally {
                setLoading(false);
            }
        };

        getQuotes();
        
        
    }, []);

    //SAVE current Quote
    const saveQuote = () => {
        var params = new URLSearchParams();
        params.append('date', date);
        params.append('text', selectedQuote.text);
        params.append('author', selectedQuote.author);

        axios.post('http://localhost:3001/1', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {console.log("Response: "+JSON.stringify(response))} )
        .catch(error => {
            console.log("Error: "+error)
        });
    }

    //Set a random quote on first load.
    useEffect(()=> {
        setRandomQuote();
    },[quotes]);

    //Select a random quote from the list.
    const setRandomQuote = () => {
        let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
        setSelectedQuote(randomQuote);
    };

    if(error) return <ErrorComponent />     //Display Error component when getQuotes catches an error.
    if(loading) return <LoadingComponent /> //Display Loading component while getting the data from the API.

    return  <div>
                <QuoteDetail selQuote={selectedQuote}/>
                <QuoteMenu setRandom={setRandomQuote} saveQuote={saveQuote}/>
            </div>
}

export default Quote;