exports.handler = async function(event, context) {
  const url = 'https://api.rolimons.com/items/v2/itemdetails';
  
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (!response.ok) {
      return { statusCode: response.status, body: JSON.stringify({ error: 'Rolimons API error' }) };
    }
    
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' // Allows your website to read the data
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch from Rolimons' })
    };
  }
};
