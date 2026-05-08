export default async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { apifyKey, actorId, input } = req.body;
  if (!apifyKey || !actorId) return res.status(400).json({ error: 'Missing apifyKey or actorId' });
  try {
    const response = await fetch(
      `https://api.apify.com/v2/acts/${actorId}/runs?token=${apifyKey}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input || {}) }
    );
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);
    return res.status(200).json(data);
  } catch (err) { return res.status(500).json({ error: err.message }); }
}
