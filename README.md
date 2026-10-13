## Supabase admin panel

The store now includes `/admin` and cash-on-delivery `/checkout`. See [Supabase setup and launch instructions](supabase/README.md) for the database migration, administrator access and deployment configuration.

# Auvora BD Next.js Template

Auvora BD is a modern, responsive e-commerce template built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**.
It includes shop, product, favourites, and contact pages with a working cart system.
Perfect for online stores, fashion boutiques, and startups.

---

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Build for Production](#build-for-production)
4. [File Structure](#file-structure)
5. [Customization](#customization)
6. [Product Images](#product-images)
7. [Screenshots](#screenshots)
8. [Support](#support)

---

## 1. Requirements

- Node.js v20.x or higher
- npm v9.x or higher
- Recommended: VSCode for editing
- Internet connection if using external product images
- Modern browser for React 19

---

## 2. Installation

1. Download and unzip the main template ZIP.
2. Open a terminal in the project folder.
3. Install dependencies:

```bash
npm install

```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 3. Build for Production

To create an optimized production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

---

## 4. File Structure

```
shopnow/
├── app/
│   ├── (main)/
│   │   ├── contact/
│   │   ├── favourites/
│   │   ├── product/
│   │   ├── shop/
│   │   └── layout.tsx
│   ├── components/
│   ├── data/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── images/
│   └── next.svg
├── .gitignore
├── next.config.js
├── package-lock.json
├── package.json
└── README.md
```

---

## 5. Customization

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary
  --primary-foreground
  --secondary
  --secondary-foreground
  --background
  --foreground
  --card
  --card-foreground
  --popover
  --popover-foreground
  --border
  --input
  --ring
}
```

### Fonts

Change fonts in `app/layout.tsx`:

```jsx
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
```

### Product Data

Edit `app/data/products.js` to update products, categories, and featured items.

---

## 6. Product Images

Place product images in `public/images/products/` and reference them in `products.js`:

```javascript
{
  id: 1,
  name: "Product Name",
  image: "/images/products/product1.jpg",
  // other properties
}
```

---

## 7. Screenshots

**Preview of pages:**

### Homepage
![Homepage](documentation/assets/homepage.png)

### Shop Page
![Shop Page](documentation/assets/shop.png)

### Product Page
![Product Page](documentation/assets/product.png)

### Cart Page
![Cart Page](documentation/assets/cart.png)

### Favourites Page
![Favourites Page](documentation/assets/favourites.png)

### Contact Page
![Contact Page](documentation/assets/contact.png)

### About Page
![About Page](documentation/assets/about.png)

### Dark Mode
![Dark Mode](documentation/assets/darkmode.png)
---

## 8. Support

Buyers can get support through your external website.

**Support Instructions:**

- Visit: [technovasync.com]
- Fill out the contact form with your question or issue.
- We aim to respond within 24 hours.

> Note: You can also optionally answer questions via email if needed.
