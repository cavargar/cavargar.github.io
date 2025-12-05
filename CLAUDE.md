# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a personal academic website for César Vargas García, a computational scientist at AGROSAVIA (Colombia). The site is built with **Jekyll** and hosted on **GitHub Pages**, featuring research profiles, publications, press coverage, and bilingual content (English/Spanish).

## Site Structure

The repository contains standalone Markdown files that Jekyll renders as pages:

- `index.md` / `index_es.md` - Home page (bilingual)
- `research.md` / `research_es.md` - Research overview (bilingual)
- `cancer-research.md` - Detailed explanation of Nature 2017 publication
- `publications.md` - Featured publications and software
- `press.md` - Media coverage and talks
- `profile.jpg` / `IMG_4039.JPG` - Profile images

**Key characteristic**: No `_config.yml`, no custom layouts directory, no `_posts/` or `_includes/`. This is a minimal Jekyll site relying on GitHub Pages defaults.

## Content Guidelines

### Research Areas Covered
1. **Hyperspectral Imaging** for Colombian Agriculture
2. **Cancer Drug Resistance Networks** (Nature 2017 - computational discovery using φ-mixing coefficient)
3. **Cell Size Control** in bacteria and algae (stochastic modeling)
4. **HIV Transmission Dynamics**
5. **AI Applications** in Biology & Agriculture

### Bilingual Content
- English pages: `index.md`, `research.md`
- Spanish pages: `index_es.md`, `research_es.md`
- When updating content, maintain consistency across both languages

### Navigation Patterns
Pages use relative links for navigation:
```markdown
[← Back to Home](/)
[ES](/index_es)
[Research](/research)
```

### Embedded Analytics & Metrics
- Google Analytics (gtag.js) in `index.md`
- Altmetric badges on publications
- Dimensions badges for citation metrics

## Development

### Preview Site Locally
```bash
# If Jekyll is installed
bundle exec jekyll serve

# View at http://localhost:4000
```

### Deployment
The site is automatically deployed via **GitHub Pages** when changes are pushed to the `main` branch. No manual build/deploy steps required.

## Editing Guidelines

### Publication Updates
When adding new publications to `publications.md`:
1. Include DOI links
2. Add Altmetric/Dimensions badge embeds:
   ```html
   <div data-badge-type="donut" data-doi="10.xxxx/xxxxx" class="altmetric-embed"></div>
   <span class="__dimensions_badge_embed__" data-doi="10.xxxx/xxxxx"></span>
   ```
3. Explain computational/modeling contributions explicitly

### Press & Media Updates
Add to `press.md` with:
- Date and source
- Link to coverage
- Brief context
- Emoji indicators (consistently used: 📰 🤖 🎙️ 🌾 etc.)

### Profile Updates
- Professional title at `index.md:5-7`
- Recent highlights section updated with year markers
- Last updated date at bottom (`index.md:78`)

## Important Notes

- **No build system**: Direct Markdown-to-HTML via Jekyll/GitHub Pages
- **No version control for assets**: Images committed directly
- **Academic focus**: Emphasize computational methods, mathematical modeling, and AI applications
- **Collaboration links**: Maintain ORCID, Google Scholar, Scopus, ResearchGate, CvLac profiles
