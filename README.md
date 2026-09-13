# AYAT COFFEE Prototype

A premium, responsive coffee shop website prototype built as a static HTML/CSS/JavaScript project for deployment on GitHub Pages.

## Run locally

1. Open a terminal in this folder.
2. Run:

```bash
python -m http.server 8000
```

3. Open http://localhost:8000 in your browser.

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload these project files to the repository.
3. Open the repository in GitHub.
4. Go to Settings > Pages.
5. Under Source, select the branch to deploy (for example `main`) and the root folder (or `/` for a static site).
6. Save and wait for the site to build.
7. Use the generated public GitHub Pages URL.

## Quick customization points

Edit the configuration in `script.js` to change:

- brand name
- WhatsApp number
- Instagram handle and URL
- website URL for QR generation
- location and Google Maps link
- opening hours

Product data is stored in the `products` array in `script.js`.

## Files

- `index.html` — page structure and sections
- `styles.css` — premium visual design and responsive layout
- `script.js` — menu data, cart logic, modal, and WhatsApp order generation

## Notes

- The cart is fully client-side.
- The website opens WhatsApp to let the customer review the order before pressing send.
- This is a static prototype built for easy future reuse across client projects.
