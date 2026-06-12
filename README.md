# Doman Coaching — Website

A single-page coaching website for Doman, built for handoff. No frameworks, no build tools — plain HTML, CSS and JavaScript. Open `index.html` in a browser and it works.

## Structure

```
index.html      — the entire page (all 16 sections)
css/styles.css  — all styling (orange/black theme, responsive)
js/main.js      — FAQ accordion, testimonial scroller, mobile nav
assets/         — images, video, logo (currently placeholders)
```

## Editing content

All text lives in `index.html`. Each section is clearly commented, e.g. `<!-- SECTION 5: THE 4-PHASE REBUILD SYSTEM -->`. Find the section, edit the text, save, refresh.

### Replacing placeholders

Placeholder boxes are marked with the class `placeholder` and a label describing what goes there (e.g. "VSL VIDEO", "BEFORE/AFTER — CLIENT 1"). To replace one:

1. Put the real image/video in `assets/`
2. Replace the `<div class="placeholder">…</div>` with an `<img>` or `<video>` tag pointing at it

### Changing the name

The name "Doman" is used consistently throughout. A find-and-replace across `index.html` will rename the whole site.

### Colours and fonts

Brand colours are CSS variables at the top of `css/styles.css`:

```css
--orange: #ff6b1a;   /* primary accent */
--black:  #0d0d0d;   /* background */
```

Change them once there, they update everywhere. Fonts are loaded from Google Fonts in the `<head>` of `index.html`.

## Deploying

This is a static site — upload the files to any host (Hostinger, Netlify, GitHub Pages, etc.). No server, database or build step required.

## Booking / application links

All CTA buttons currently point to `#apply`. When a booking system (e.g. Calendly) or application form exists, update the `href` on the buttons — search `index.html` for `cta-button`.
