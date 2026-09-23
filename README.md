# Mandragora — Landing Page

Official landing page for **Mandragora**, an offline-first Android application designed for houseplant care tracking, room organization, care schedules, propagation, and visual growth diaries.

Hosted on GitHub Pages.

## Key Features

- **Botanical Responsive Design:** Clean aesthetic using custom typography, modern cards, and CSS variables.
- **Bilingual (English & Polish):** Toggle dynamically between English and Polish with language preference saved in `localStorage`.
- **Capability Presentation:** Details plant and room organization, flexible care schedules, propagation tracking, visual diary, privacy guarantees, and optional bring-your-own-key AI integration.
- **Privacy Policy Link:** Direct links to the hosted privacy policy page at [https://mmarchwant.github.io/mandragora-privacy/](https://mmarchwant.github.io/mandragora-privacy/).
- **GitHub Pages Compatible:** Includes `.nojekyll` file to bypass Jekyll build step.

## Project Structure

```
├── index.html     # Semantic HTML5 markup
├── styles.css     # Modern responsive CSS styling
├── script.js     # Language toggle and FAQ accordion logic
├── .nojekyll      # GitHub Pages configuration
└── README.md      # Documentation
```

## Local Preview

To run a simple HTTP server locally:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your web browser.
