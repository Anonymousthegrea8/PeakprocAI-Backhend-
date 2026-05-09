export default async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { apiKey, url, strategy } = req.body;
  if (!apiKey || !url) return res.status(400).json({ error: 'Missing apiKey or url' });
  try {
    const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy || 'mobile'}&key=${apiKey}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);
    const score = Math.round((data.lighthouseResult?.categories?.performance?.score || 0) * 100);
    const audits = data.lighthouseResult?.audits || {};
    const fcp = audits['first-contentful-paint']?.displayValue || 'N/A';
    const lcp = audits['largest-contentful-paint']?.displayValue || 'N/A';
    const issues = [];
    if (score < 50) issues.push('Very slow mobile speed');
    if (score >= 50 && score < 70) issues.push('Mobile speed needs improvement');
    if (audits['uses-optimized-images']?.score < 0.9) issues.push('Unoptimized images');
    if (audits['unused-javascript']?.score < 0.9) issues.push('Unused JavaScript');
    return res.status(200).json({
      score, fcp, lcp,
      issues: issues.join(', ') || 'No major issues detected'
    });
  } catch (err) { return res.status(500).json({ error: err.message }); }
}
