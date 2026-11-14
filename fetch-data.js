const fs = require('fs');

async function updateData() {
  try {
    const response = await fetch('https://api.rolimons.com/items/v2/itemdetails', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const data = await response.json();
    
    const itemsObj = data.items;
    const processed = Object.entries(itemsObj).map(([id, itemData]) => ({
      name: itemData[0],
      rap: itemData[2]
    })).filter(i => i.rap > 0).sort((a, b) => b.rap - a.rap);

    fs.writeFileSync('data.json', JSON.stringify(processed, null, 2));
    console.log('Data updated successfully!');
  } catch (err) {
    console.error('Failed to fetch:', err);
  }
}
updateData();
