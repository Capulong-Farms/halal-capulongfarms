# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Hugo Static Site Generator
- **Start development server**: `hugo server -D`
- **Build for production**: `hugo`
- **Build with drafts**: `hugo -D`

The development server runs on `localhost:1313` and includes live reload for instant preview of changes.

## Project Architecture

### Hugo Site Structure
This is a Hugo static site for Capulong Farms, a farm-to-table business website. The architecture follows Hugo's standard conventions with a custom theme:

- **Configuration**: `hugo.toml` - Contains site settings, menu structure, WhatsApp contact number, and caching configurations
- **Data-driven content**: `data/products.yaml` - Centralized product catalog with categories, prices, images, and availability
- **Custom theme**: `themes/capulong/` - Fully custom theme with farm-specific styling and functionality

### Theme Architecture (`themes/capulong/`)
- **Layouts**: 
  - `index.html` - Single-page application structure with hero, about, products grid, and order sections
  - `_default/baseof.html` - Base HTML template with head/body structure
  - `partials/` - Reusable components (header with cart, footer, floating contact buttons)
- **Static assets**: `static/css/style.css` - Comprehensive CSS with CSS custom properties and responsive design

### Product Management System
Products are managed through `data/products.yaml` with structured categories:
- Each category has an `id` and `name`
- Products include: `name`, `price`, `image` path, `available` status, and `discontinue` status
- **`available`**: Controls seasonal availability (true/false) - shows "NOT AVAILABLE" watermark when false
- **`discontinue`**: Controls product visibility (true/false) - products with `discontinue: true` are HIDDEN from website entirely
- Image naming follows prefix convention: `FA-*` (Fish), `FP-*` (Farm Products), `LP-*` (Livestock), etc.

### Key Configuration Parameters
- `whatsapp_number`: Used for WhatsApp contact integration
- `gcash_qr_image`: Payment QR code path
- Taxonomies disabled to simplify site structure
- Cache settings optimized for development (10s maxAge)

## File Editing Guidelines

### Modifying Products
Edit `data/products.yaml` to:
- Add/remove products from categories
- Update prices and availability
- Change product images (ensure images exist in `static/images/`)

### Styling Changes
Edit `themes/capulong/static/css/style.css` for:
- Color scheme modifications (CSS custom properties in `:root`)
- Layout adjustments and responsive design
- Component-specific styling

### Content Updates
- Homepage content: `themes/capulong/layouts/index.html`
- Site configuration: `hugo.toml` (title, description, contact info)
- Navigation menu: Defined in `hugo.toml` under `[menu]`

### Contact Information
WhatsApp and Messenger integration is handled through:
- `hugo.toml` params for WhatsApp number
- `themes/capulong/layouts/partials/contacts-button.html` for floating buttons
- Header cart functionality with WhatsApp integration

## Image Management
Images are stored in `static/images/` and follow naming conventions:
- `FA-*`: Fish & Aquatics
- `FP-*`: Farm Products  
- `LP-*`: Livestock & Poultry
- `PF-*`: Processed Foods
- Payment QR codes and farm photos

The `public/` directory is auto-generated and should not be edited directly.