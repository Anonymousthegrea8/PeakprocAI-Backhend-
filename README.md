# PeakProCAI Backend — Deployment Guide

## What This Is
This backend proxies all API calls (Apify, Anthropic, Instantly, PageSpeed) 
to avoid CORS issues when running the Connector OS tools in your browser.

## Files Inside
- api/anthropic.js     — AI personalisation proxy
- api/apify-start.js   — Start Apify actor run
- api/apify-status.js  — Check run status
- api/apify-results.js — Get run results
- api/instantly.js     — Push leads to Instantly
- api/pagespeed.js     — Google PageSpeed proxy
- api/health.js        — Health check
- vercel.json          — Vercel configuration
- package.json         — Dependencies
- peakprocai-connector-os.html  — PeakProCAI tool
- cartyvisuals-connector-os.html — Carty Visuals tool
- shopify-connector-os.html      — Shopify tool

## How to Deploy (5 minutes)

### Step 1 — Create GitHub Repository
1. Go to github.com → New repository
2. Name it: peakprocai-backend
3. Set to Private
4. Click Create

### Step 2 — Upload Files
1. Drag and drop ALL files from this folder into the GitHub repo
2. Click "Commit changes"

### Step 3 — Deploy to Vercel
1. Go to vercel.com → Sign up with GitHub (free)
2. Click "Add New Project"
3. Import your peakprocai-backend repository
4. Click Deploy — no configuration needed
5. Vercel gives you a URL like: https://peakprocai-backend.vercel.app

### Step 4 — Use the Tools
1. Open any of the three HTML files in Chrome
2. Paste your Vercel URL in the Backend URL field
3. Click "Test Connection" — should show green
4. Enter your API keys and start using the tool

## Cost
- GitHub: Free (private repo)
- Vercel: Free (hobby plan covers all your usage)
- Total: $0

## Your Three Tools
All three HTML files work with the same backend:
- peakprocai-connector-os.html → Real estate connector
- cartyvisuals-connector-os.html → Photography connector  
- shopify-connector-os.html → Shopify connector
