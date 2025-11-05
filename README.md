# Capulong Farms Project Structure

## Overview
Hugo-based static website for Capulong Farms, a farm-to-table business in Lanang, Candaba, Pampanga offering fresh produce, livestock, and agricultural training.

---

## Root Directory

```
capulongfarms.org/
│
├── hugo.toml                    # Main Hugo configuration file - site settings, menu, SEO, WhatsApp number
├── README.md                    # Project documentation - quick reference for editing the site
│
├── archetypes/
│   └── default.md              # Hugo archetype template for new content files
│
├── data/
│   └── products.yaml           # Product catalog data - all farm products, prices, images, availability
│
├── static/
│   └── images/                 # Static assets served directly (product photos, payment QR codes)
│       ├── FA-*.jpg            # Fish & Aquatics product images (Tilapia, Bangus, Catfish)
│       ├── FP-*.jpg            # Farm Products images (Corn, Rice, Vegetables, Compost)
│       ├── LP-*.jpg            # Livestock & Poultry images (Ducks, Chickens, Goats, Eggs)
│       ├── PF-*.jpg            # Processed Foods images (Cat food, Preserved foods)
│       ├── BW-*.jpg            # Block Works images (Hollow blocks)
│       ├── TC-*.jpg            # Training Courses On-site images
│       ├── TCO-*.jpg           # Training Courses Online images
│       ├── TL-*.jpg            # Training Literature images
│       ├── Website-*.jpg       # Website services images
│       ├── gcash-qr.png        # GCash payment QR code
│       ├── farm-photo.jpg      # Main farm photo
│       └── placeholder*.png/jpg # Placeholder images for missing products
│
├── themes/
│   └── capulong/               # Custom theme for Capulong Farms
│       │
│       ├── theme.toml          # Theme metadata and configuration
│       │
│       ├── layouts/
│       │   ├── index.html      # Homepage template - main landing page structure
│       │   │
│       │   ├── _default/
│       │   │   └── baseof.html # Base template - HTML structure wrapper for all pages
│       │   │
│       │   └── partials/
│       │       ├── header.html          # Site header - navigation menu
│       │       ├── footer.html          # Site footer - contact info, credits
│       │       └── contacts-button.html # Floating contact buttons (WhatsApp, Order)
│       │
│       └── static/
│           └── css/
│               └── style.css   # Main stylesheet - all visual styling and responsive design
│
├── public/                     # Generated static site (created by Hugo build, not in git)
│
└── resources/                  # Hugo generated resources (image processing, CSS, not in git)
    └── _gen/
```

---

## Directory Purposes

### `/archetypes/`
Contains content templates for Hugo. The `default.md` provides frontmatter structure for new markdown files.

### `/data/`
Structured data files in YAML/JSON/TOML format. `products.yaml` contains all product categories, individual products with names, prices, images, and availability status.

### `/static/`
Static assets served directly without processing. Images, fonts, downloadable files.

### `/themes/capulong/`
Custom Hugo theme specific to Capulong Farms branding and functionality.

#### `/themes/capulong/layouts/`
HTML templates using Go templating language:
- `index.html` - Homepage with hero section, product grid, order form
- `_default/baseof.html` - Base HTML structure (head, body wrapper)
- `partials/` - Reusable template components

#### `/themes/capulong/static/`
Theme-specific static assets (CSS, JavaScript, fonts).

### `/public/`
Auto-generated directory when running `hugo build`. Contains the compiled static website ready for deployment. **Not tracked in git.**

### `/resources/`
Hugo's internal cache for processed resources. **Not tracked in git.**

---

## Key Files Reference

| File | Purpose | When to Edit |
|------|---------|--------------|
| `hugo.toml` | Site settings, menu, SEO, contact info | Change site title, URL, WhatsApp number, menu items |
| `data/products.yaml` | Product catalog | Add/edit products, prices, availability |
| `themes/capulong/layouts/index.html` | Homepage structure | Modify page sections, layout, content blocks |
| `themes/capulong/static/css/style.css` | Visual styling | Change colors, fonts, spacing, responsive design |
| `themes/capulong/layouts/partials/contacts-button.html` | Floating action buttons | Modify WhatsApp/Order buttons |
| `themes/capulong/layouts/partials/header.html` | Navigation menu | Change header layout or navigation |
| `themes/capulong/layouts/partials/footer.html` | Footer content | Update footer info, links, credits |

---

## Image Naming Convention

Product images follow a prefix-based naming system:

- `FA-*` = Fish & Aquatics
- `FP-*` = Farm Products
- `LP-*` = Livestock & Poultry
- `PF-*` = Processed Foods
- `BW-*` = Block Works
- `TC-*` = Training Courses (On-site)
- `TCO-*` = Training Courses (Online)
- `TL-*` = Training Literature
- `Website-*` = Website Services

---

## Development Workflow

1. **Start local server**: `hugo server -D`
2. **Edit content**: Modify `data/products.yaml` or theme files
3. **Preview changes**: Check localhost:1313 in browser
4. **Build for production**: `hugo` (generates `/public/` directory)
5. **Deploy**: Upload `/public/` contents to web host

---

## Product Categories in products.yaml

1. Farm Products (produce)
2. Fish & Aquatics (aquatics)
3. Processed Foods (processed)
4. Livestocks & Poultry (livestocks)
5. Online Training (coursesonline)
6. On-site Training (coursesonsite)
7. Training Literatures (coursesliteratures)
8. Block Works (blockworks)
9. Website Creation (website)

Each category contains products with: name, price, image path, availability status.
# Force deployment Wed, Nov  5, 2025  9:01:37 AM
