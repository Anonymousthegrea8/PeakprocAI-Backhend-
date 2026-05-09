export default function handler(req, res) {
  return res.status(200).json({
    status: 'ok',
    message: 'PeakProCAI Backend is running',
    endpoints: [
      'POST /api/anthropic',
      'POST /api/apify-start',
      'POST /api/apify-status',
      'POST /api/apify-results',
      'POST /api/instantly',
      'POST /api/pagespeed'
    ]
  });
}
