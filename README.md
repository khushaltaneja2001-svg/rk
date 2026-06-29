# RK Interior — Website Documentation

**Brand:** RK Interior  
**Tagline:** Ceiling Specialists, Punjab  
**Contact:** 8010561544  
**Tech Stack:** HTML5, CSS3, Vanilla JavaScript (No frameworks needed)

---

## 📁 Project Structure

```
rk-interior/
│
├── index.html              → Home Page
├── ceiling-projects.html   → Ceiling Projects Gallery Page
├── about.html              → About Us Page
├── contact.html            → Contact Us Page
│
├── css/
│   └── style.css           → All styles (colors, layout, responsive)
│
├── js/
│   ├── main.js             → Slider, gallery filter, form, animations
│   └── components.js       → Shared navbar, footer, floating buttons
│
└── includes/               → ⭐ Upload ALL your images here
    └── README.txt          → Image naming guide
```

---

## 🌐 Pages Overview

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, features, ceiling cards, gallery, testimonials, contact form |
| Projects | `ceiling-projects.html` | Filterable gallery by ceiling type |
| About | `about.html` | Company story, values, milestones, team |
| Contact | `contact.html` | Contact form, Google Map, FAQ, service areas |

---

## 🖼️ How to Add Images

All images go inside the **`includes/`** folder. Use these exact file names:

### Hero Section (1 image)
```
herosectionimage.jpeg
```

### Gypsum Ceiling (up to 10 images)
```
gypsom ceiling1.jpeg
gypsom ceiling2.jpeg
...
gypsom ceiling10.jpeg
```

### Partition (up to 10 images)
```
partition1.jpeg
partition2.jpeg
...
partition10.jpeg
```

### Grid Ceiling (up to 10 images)
```
grid ceiling1.jpeg
grid ceiling2.jpeg
...
grid ceiling10.jpeg
```

### Fall Ceiling (up to 10 images)
```
fall ceiling1.jpeg
fall ceiling2.jpeg
...
fall ceiling10.jpeg
```

### PVC Panel (up to 10 images)
```
pvc panel1.jpeg
pvc panel2.jpeg
...
pvc panel10.jpeg
```

> ✅ Total: 51 images maximum (1 hero + 50 project images)  
> ✅ If an image is missing, that slot is automatically hidden — no error shown

---

## 🔢 How to Increase Image Limit Per Category

Open **`js/main.js`** and find this block (around line 60):

```javascript
const categories = {
  gypsum:    { label: 'Gypsum Ceiling', prefix: 'gypsom ceiling', count: 10, ext: 'jpeg' },
  partition: { label: 'Partition',      prefix: 'partition',      count: 10, ext: 'jpeg' },
  grid:      { label: 'Grid Ceiling',   prefix: 'grid ceiling',   count: 10, ext: 'jpeg' },
  fall:      { label: 'Fall Ceiling',   prefix: 'fall ceiling',   count: 10, ext: 'jpeg' },
  pvc:       { label: 'PVC Panel',      prefix: 'pvc panel',      count: 10, ext: 'jpeg' }
};
```

Change `count: 10` to any number you want. Example — 20 images for gypsum:

```javascript
gypsum: { label: 'Gypsum Ceiling', prefix: 'gypsom ceiling', count: 20, ext: 'jpeg' },
```

Then add your images named `gypsom ceiling11.jpeg` through `gypsom ceiling20.jpeg` in the `includes/` folder.

---

## 🎨 Brand Colors

Defined in `css/style.css` at the top as CSS variables:

| Variable | Color | Used For |
|----------|-------|----------|
| `--forest` | `#2C3B2D` | Primary buttons, navbar, headings |
| `--gold` | `#B8860B` | Accents, eyebrow labels, highlights |
| `--cream` | `#F5F0E8` | Section backgrounds |
| `--warm-white` | `#FDFAF5` | Page background |
| `--sand` | `#D6C4A0` | Borders, dividers |
| `--taupe` | `#8B7355` | Secondary accents |

To change any color, edit its value in the `:root { }` block at the top of `style.css`.

---

## 📞 How to Update Phone Number

The phone number **8010561544** appears in these files. Search and replace all:

| File | What to Change |
|------|---------------|
| `js/components.js` | WhatsApp link + Call link in floating buttons and footer |
| `index.html` | Call button in hero + contact section |
| `contact.html` | All call/WhatsApp links |
| `about.html` | CTA section call button |

**Quick way in VS Code:**  
Press `Ctrl + Shift + H` → search `8010561544` → replace with your new number.

---

## ✍️ How to Edit Testimonials

Open **`js/main.js`** and find the `testimonials` array (around line 10):

```javascript
const testimonials = [
  { name: "Rajesh Sharma", loc: "Patiala", text: "Your review text here...", rating: 5 },
  { name: "Priya Kapoor",  loc: "Chandigarh", text: "...", rating: 5 },
  // add more here
];
```

- Change `name`, `loc` (location), `text`, and `rating` (1–5)
- Add more objects to the array to add more reviews
- The slider automatically adjusts to show all reviews

---

## 📱 Floating Buttons (WhatsApp & Call)

Defined in **`js/components.js`** in the `FLOATING_HTML` variable.

- **WhatsApp button** → opens `https://wa.me/918010561544` with a pre-filled message
- **Call button** → dials `+918010561544`

To change the WhatsApp pre-filled message, find and edit this part:

```
https://wa.me/918010561544?text=Hello%2C%20I%27m%20interested%20in%20your%20ceiling%20services
```

Replace the text after `?text=` with your custom message (URL encoded).

---

## 🗺️ Google Maps (Contact Page)

The map is in **`contact.html`**. Search for `<iframe` and you'll find:

```html
<iframe src="https://www.google.com/maps/embed?pb=...Patiala..." ...>
```

To change location:
1. Go to [Google Maps](https://maps.google.com)
2. Search your exact address
3. Click **Share** → **Embed a map** → Copy the iframe code
4. Replace the existing `<iframe>` in `contact.html`

---

## 🔍 SEO — How to Update

Each page has meta tags at the top inside `<head>`:

```html
<title>RK Interior — Premium Ceiling Specialists in Punjab</title>
<meta name="description" content="...">
<meta name="keywords" content="...">
<link rel="canonical" href="https://rkinterior.in/">
```

- Update the `<title>` and `description` for each page
- Replace `https://rkinterior.in/` with your actual domain in all `canonical` tags
- Add your business to [Google Search Console](https://search.google.com/search-console) after going live

---

## 🚀 How to Go Live

### Option 1 — Shared Hosting (Hostinger, GoDaddy, etc.)
1. Download the ZIP file
2. Log in to your hosting cPanel
3. Go to **File Manager** → `public_html`
4. Upload and extract the ZIP
5. Your site is live!

### Option 2 — Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `rk-interior/` folder
3. Site goes live instantly with a free URL

### Option 3 — GitHub Pages (Free)
1. Create a GitHub account
2. New repository → upload all files
3. Go to Settings → Pages → Deploy from main branch

---

## ✏️ Common Edits Quick Reference

| What to Change | File | Search For |
|----------------|------|------------|
| Phone number | All files | `8010561544` |
| Business name | `js/components.js` | `RK Interior` |
| Address/city | `contact.html`, `js/components.js` | `Patiala` |
| Image count per category | `js/main.js` | `count: 10` |
| Brand colors | `css/style.css` | `:root {` |
| Testimonials | `js/main.js` | `const testimonials` |
| Nav links | `js/components.js` | `NAV_HTML` |
| Footer links | `js/components.js` | `FOOTER_HTML` |
| Hero headline | `index.html` | `hero-title` |
| WhatsApp message | `js/components.js` | `wa.me/91...?text=` |

---

## 📋 Checklist Before Going Live

- [ ] Add all images to `includes/` folder with correct names
- [ ] Verify phone number is correct on all pages
- [ ] Update Google Maps embed with your exact address
- [ ] Replace `https://rkinterior.in/` with your real domain in canonical tags
- [ ] Test on mobile (Chrome DevTools → Toggle device toolbar)
- [ ] Test WhatsApp and Call buttons on a real phone
- [ ] Submit sitemap to Google Search Console

---

*Built for RK Interior — Punjab's Ceiling Specialists*  
*For support or changes, refer to this README or consult your web developer.*
