import fetch from 'node-fetch';

export default async function handler(req, res) {
  const token = process.env.PCO_TOKEN; // pulls from your environment variables
  
  const response = await fetch('https://api.planningcenteronline.com/services/v2/plans?order=sort_date', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  res.status(200).json(data);
}
