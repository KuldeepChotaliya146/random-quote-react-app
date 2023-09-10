import axios from 'axios';
import React, { useState } from 'react'

function RandomForm() {
  const baseURL = import.meta.env.VITE_RANDOM_QUOTE_URL
  const config = {
    headers: {
    'X-Api-Key' : import.meta.env.VITE_RANDOM_QUOTE_API_KEY
    }
  }
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(false);

  const generateQuote = async () => {
    try {
      let category = 'happiness';
      setLoading(true);
      const response = await axios.get(`${baseURL}${category}`, config);
      const data = await response.data;
      setQuote(data[0].quote);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
    
  }

  return (
    <div>
      <p><b>{quote.length > 0 ? quote : 'Your quote will display over here!'}</b></p>
      <button onClick={generateQuote}>
        {loading ? 'Loading...': 'Generate Quote' }
      </button>
    </div>
  )
}

export default RandomForm