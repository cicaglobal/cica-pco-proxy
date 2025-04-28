export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const token = process.env.PCO_TOKEN; // pull from environment

  const response = await fetch('https://api.planningcenteronline.com/services/v2/plans?order=sort_date', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
