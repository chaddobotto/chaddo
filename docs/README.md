# MOG Bot Website

This directory contains the static website for MOG Bot, hosted via GitHub Pages.

## Files

- **index.html** - Landing page with project overview and quick start
- **docs.html** - Comprehensive documentation with sidebar navigation
- **CNAME** - Custom domain configuration (mogbot.fun)
- **.nojekyll** - Prevents Jekyll processing on GitHub Pages

## Local Development

To view the website locally, simply open the HTML files in your browser:

```bash
# Open landing page
open docs/index.html

# Or use a local server
npx serve docs
```

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Pages Configuration

1. Repository: `mogbot/mog-bot`
2. Source: `main` branch, `/docs` folder
3. Custom domain: `mogbot.fun`

### DNS Configuration

Point your domain to GitHub Pages:

```
A records (for apex domain):
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

OR

CNAME record (for subdomain):
mogbot.github.io
```

## Design

The website follows a minimalist aesthetic with:

- **Color scheme**: Light blue-gray (#c7d5e0) background with dark gray (#333) text
- **Typography**: Monospace font (Courier New) for technical aesthetic
- **Layout**: Centered content with maximum 900px width
- **Style**: Simple borders, no gradients or shadows
- **Tone**: Professional yet satirical

All styling is inline to keep the site self-contained and fast-loading.

## Updates

When updating the website:

1. Edit HTML files directly
2. Test locally
3. Commit and push to main branch
4. Changes appear on mogbot.fun within minutes

---

© 2026 The MOG Bot Team
