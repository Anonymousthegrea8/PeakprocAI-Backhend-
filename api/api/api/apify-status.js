export default async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { apifyKey, runId } = req.body;
  if (!apifyKey || !runId) return res.status(400).json({ error: 'Missing apifyKey or runId' });
  try {
    const response = await fetch(
      `https://api.apify.com/v2/actor-runs/${runId}?token=${apifyKey}`
    );
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);
    return res.status(200).json(data);
  } catch (err) { return res.status(500).json({ error: err.message }); }
}
