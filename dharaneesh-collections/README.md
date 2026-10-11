# Dharaneesh Collections Website

A static boutique website built with HTML, CSS and vanilla JavaScript. No backend, database, API key or paid service is needed.

- WhatsApp: https://wa.me/919677421499
- Instagram: https://www.instagram.com/dharaneesh_collections_/

## Files

| File | What it does |
|---|---|
| `index.html` | Page structure and text (home, story, contact, footer) |
| `styles.css` | Colours, fonts and layout |
| `script.js` | Products, category filters, WhatsApp links, mobile menu |
| `README.md` | These instructions |

## Publish for free on GitHub Pages

1. Create a free account at https://github.com.
2. Create a **public** repository named `dharaneesh-collections`.
3. Click **Add file → Upload files** and upload `index.html`, `styles.css`, `script.js` and `README.md` to the repository root (not inside a folder). Commit the upload.
4. Open **Settings → Pages**.
5. Under Source, select **Deploy from a branch**.
6. Choose the `main` branch and the `/(root)` folder.
7. Click **Save** and wait a minute or two.
8. Open the website URL GitHub shows at the top of the Pages screen (usually `https://YOUR-USERNAME.github.io/dharaneesh-collections/`).

## How to update things

**Products, prices and descriptions:** open `script.js` and edit the `PRODUCTS` list at the top. Each product has `name`, `category`, `price`, `badge`, `description`, `image` and `alt`. To add a product, copy one block and paste it below with a comma. The category must be exactly one of: Ethnic Wear, Everyday Styles, Festive Looks, Featured Designs. Delete `<small>Sample price</small>` text in `renderProducts` and the notes in `index.html` once real prices are added.

**Photographs:** the sample images are loaded from Unsplash. To use your own photos, create an `images` folder, upload your pictures, and set `image: "images/my-photo.jpg"`. Use portrait photos (4:5 ratio works best) under 300 KB. Always write a short `alt` description. If a photo fails to load, the card shows a plum tile with the product name.

**Phone number:** change `whatsappNumber` in `script.js` (digits only, with country code, e.g. `919677421499`). Also search `index.html` for `919677421499` and `96774 21499` and replace each one.

**Instagram:** change `instagramUrl` in `script.js`, and search `index.html` for `dharaneesh_collections_`.

**Colours and fonts:** edit the values under `:root` at the top of `styles.css`.

**Website text:** edit the wording directly in `index.html`.

## Notes

- All products, prices and photographs are illustrative samples until the real catalogue is provided. They are not photos of actual shop inventory.
- The Instagram section links to the profile only. It is not connected to the Instagram API and shows no live posts.
- No address, email, business hours or testimonials are included because none were provided.
