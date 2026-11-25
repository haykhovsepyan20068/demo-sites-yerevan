# Demo websites

**Demo versions. These are not the official websites of the companies.** Any changes must be agreed with the client.

Static websites (HTML, CSS, JavaScript, no build step). Two languages: English and Armenian (EN / ՀԱՅ).

## Structure of every site

- `js/content.js` is the only file that holds a company's data (texts in EN and HY, contacts, hours, social links, colors and fonts). Empty fields hide the matching block.
- `js/app.js`, `css/style.css`, `index.html` are the shared template.

## Run locally

```
python -m http.server 8765
```

Then open `http://localhost:8765/<folder>/index.html`.

## Data

Contacts come from public map listings and social pages. Photos are not used because usage rights are not confirmed. Check all details with the business before any real use.
