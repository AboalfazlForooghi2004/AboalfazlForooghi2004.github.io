# Portfolio Redesign — Abolfazl Foroughi

A professional engineering portfolio and technical blog for a Network Engineer specializing in Linux networking, SDN, network virtualization, and network automation.

## Tech Stack

- **Jekyll 4.x** — static site generator
- **Rouge** — build-time syntax highlighting (no client-side Prism.js)
- **Vanilla JavaScript** — no frameworks, no jQuery
- **CSS Custom Properties** — single-file design system (`assets/css/main.css`)
- **GitHub Pages** — automatic deployment on push to `main`

## Local Development

```bash
# Install Ruby 3.2+ if not already installed
# Then install dependencies and serve locally:
bundle install
bundle exec jekyll serve --livereload

# Open http://localhost:4000 in your browser
```

## Production Build

```bash
JEKYLL_ENV=production bundle exec jekyll build
# Output is generated in _site/
```

## Deployment

Push to the `main` branch. GitHub Actions automatically builds and deploys to GitHub Pages at:

```
https://aboalfazlforooghi2004.github.io/
```

The deployment workflow is defined in `.github/workflows/pages.yml`.

## Publishing a New Blog Article

1. Create a new file in `_posts/` with the naming convention:
   ```
   _posts/YYYY-MM-DD-article-title.md
   ```

2. Add YAML frontmatter:
   ```yaml
   ---
   layout: post
   title: "Article Title (60 chars max)"
   date: YYYY-MM-DD
   category: "Linux Networking"
   tags: ["Linux", "VRF", "Networking"]
   excerpt: "Brief summary for cards and SEO (155 chars max)"
   reading_time: 12
   featured: true
   toc: true
   ---
   ```

3. Write article content in Markdown below the frontmatter.

4. Categories: `Linux Networking`, `Network Engineering`, `SDN & Network Virtualization`, `Network Automation`, `Routing & Switching`, `Infrastructure`, `Open Source`

## Updating Projects

1. Edit `_data/projects.yml` to add or modify project data.
2. Create or update case study pages under `projects/`.

## Project Structure

```
├── _config.yml          # Jekyll configuration
├── Gemfile               # Ruby dependencies
├── index.md              # Homepage
├── _layouts/             # Page templates
│   ├── default.html      # Base template (SEO, header, footer)
│   ├── home.html         # Homepage layout
│   ├── page.html         # Standard content page
│   ├── blog.html         # Blog landing
│   └── post.html         # Individual article
├── _includes/            # Reusable components
│   ├── header.html
│   ├── nav.html          # Navigation with active page detection
│   ├── footer.html
│   ├── project-card.html
│   ├── article-card.html
│   └── toc.html          # Table of contents
├── _data/
│   └── projects.yml     # Project data (SDN Platform, NetWatch, Labs)
├── _posts/              # Blog articles (Markdown + frontmatter)
├── assets/
│   ├── css/main.css     # Design system (Graphite & Copper)
│   ├── js/main.js       # Navigation, scroll reveal, copy-to-clipboard
│   └── images/          # Profile images
├── projects/            # Case study pages
├── blog/                # Blog landing page
├── open-source/         # Open source contributions page
├── about/               # About page
├── robots.txt
└── .github/workflows/
    └── pages.yml         # GitHub Actions deployment
```

## Design System

- **Background:** Graphite (#0f0f0f / #1a1a1a / #242424)
- **Accent:** Copper (#e67e22)
- **Text:** #f5f5f5 / #b8b8b8 / #8c8c8c (WCAG AA compliant)
- **Typography:** System sans-serif + JetBrains Mono for code
- **Spacing:** 8px base unit
- **Animations:** Restrained, prefers-reduced-motion respected
