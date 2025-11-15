# Halal Capulong Farms - Stable State Documentation
## Complete E-commerce Platform with Advanced Discount System and Perfect Messenger Integration

### Current Stable Version
- **Commit Hash**: `ce71656`
- **Commit Message**: "Perfect synchronization: Complete discount system, fixed dialog functionality, and identical cart/floating button behavior"
- **Date**: November 15, 2025
- **Author**: Claude Code Enhancement
- **Branch**: main

## Project Overview

**Project Name**: Halal Capulong Farms  
**Purpose**: E-commerce website for halal certified grocery products and farm supplies  
**Technology Stack**: Hugo Static Site Generator with custom theme  
**Domain**: https://halal.capulongfarms.org/  
**Business Location**: Lanang, Candaba, Pampanga, Philippines  

This is a complete transformation of the original farm business into a halal grocery store specializing in certified Islamic-compliant products, now featuring a **perfect discount system** and **100% synchronized functionality** with the main capulongfarms.org repository.

---

## Key Features Implemented in This Version

### 🎯 **Advanced Discount System (Perfect Implementation)**
- **Discount Parameter**: Products support 0-100% discount values in `data/products.yaml`
- **Blue Discount Watermarks**: 
  - 1-99%: Shows "X% discount" with large percentage text
  - 100%: Shows "FREE" watermark
  - 0%: No watermark displayed
- **Cart Calculations**: Perfect discount calculation in cart display and totals
- **Order Messaging**: Discount information included in WhatsApp/Messenger orders

### 🔄 **Perfect Messenger Integration (Fixed Dialog System)**
- **WhatsApp First**: Orders sent to WhatsApp immediately upon "Proceed to Buy"
- **Dialog Display**: Shows confirmation with Messenger option
- **Messenger Icon**: Display-only (circular blue icon, no click functionality)
- **OK Button**: Functional button that sends to Messenger and completes order
- **Auto-Timeout**: 10-second automatic Messenger send if no user interaction
- **No Dialog Disappearing Bug**: Fixed issue where dialog would close on icon hover

### 🎨 **Floating Contact Buttons (Perfect Alignment)**
- **Circular Design**: Both WhatsApp and Messenger buttons are perfectly circular
- **Proper Alignment**: Identical positioning and spacing from screen edge
- **Consistent Colors**: WhatsApp green (#25D366), Messenger blue (#0084FF)
- **Responsive Design**: Scales properly on mobile devices
- **Hover Effects**: Smooth animations and shadow effects

### 🛒 **Advanced Cart System**
- **Discount-Aware Cart**: Cart displays discounted prices correctly
- **Real-Time Calculations**: Totals reflect discount values instantly
- **Smart Messaging**: Order details include discount breakdowns
- **Persistent Storage**: Cart data survives browser sessions
- **Mobile Optimized**: Touch-friendly cart management

### 🔗 **Cross-Repository Synchronization**
- **100% Functional Identity**: Cart, discount, and floating button systems identical to capulongfarms.org
- **Event Handler Consistency**: All JavaScript event handling synchronized
- **CSS Styling Match**: Identical watermark and button styling
- **Dialog Behavior**: Perfect match of dialog creation and cleanup

---

## 1. Project Structure

```
C:\Afiq\Homepage\CapulongFarms\Chocolatey\halal-capulongfarms\
│
├── hugo.toml                           # Main Hugo configuration
├── README.md                           # Project structure documentation
├── CLAUDE.md                           # Development instructions for Claude Code
├── STABLE_STATE_DOCUMENTATION.md       # Previous stable state reference
├── COMPREHENSIVE_DOCUMENTATION.md      # This complete documentation
├── trigger.txt                         # Deployment trigger file
│
├── archetypes/
│   └── default.md                      # Content template with frontmatter
│
├── data/
│   └── products.yaml                   # Complete product catalog
│
├── static/
│   └── images/                         # Static product images and assets
│       ├── Gcash-qr.jpeg               # GCash payment QR code
│       ├── LP-*.jpg                    # Livestock & Poultry images
│       ├── farm-photo.jpg/.png         # Main farm photos
│       ├── gcash-qr.png                # Payment QR code
│       └── placeholder*.jpg/.png       # Fallback images
│
├── themes/
│   └── capulong/                       # Custom Hugo theme
│       ├── theme.toml                  # Theme metadata
│       ├── layouts/
│       │   ├── index.html              # Homepage template
│       │   ├── _default/
│       │   │   └── baseof.html         # Base HTML structure
│       │   └── partials/
│       │       ├── header.html         # Navigation header
│       │       ├── footer.html         # Site footer
│       │       └── contacts-button.html # Floating contact buttons
│       └── static/
│           ├── css/
│           │   └── style.css           # Complete stylesheet
│           └── js/
│               ├── cart.js             # Shopping cart functionality
│               └── app.js              # Main application logic
│
├── public/                             # Generated static site (auto-generated)
└── resources/                          # Hugo cache (auto-generated)
```

---

## 2. Configuration Files

### hugo.toml
**Location**: `C:\Afiq\Homepage\CapulongFarms\Chocolatey\halal-capulongfarms\hugo.toml`

```toml
baseURL = 'https://halal.capulongfarms.org/'
languageCode = 'en-ph'
title = 'Halal Certified Products | Farm-to-Table Pampanga – Capulong Farms'
theme = 'capulong'

[params]
  description = "Capulong Farms Halal Division - Certified halal farm produce, livestock, and agricultural products from Lanang, Candaba, Pampanga. Islamic-compliant farm-to-table goodness."
  whatsapp_number = "966542761620"
  gcash_qr_image = "/images/gcash-qr.png"

# Disable default taxonomies
disableKinds = ["taxonomy", "term"]

[taxonomies]

[menu]
  [[menu.main]]
    name = "Halal Capulong Farms"
    url = "#"
    weight = 1
    [menu.main.params]
      class = "cta-button"
  [[menu.main]]
    name = "Products"
    url = "#products"
    weight = 2
  [[menu.main]]
    name = "Buy&Pay!"
    url = "#order"
    weight = 3

# Cache busting for CSS and images
[outputs]
  home = ["HTML"]

# Production cache settings
[caches]
  [caches.getcsv]
    maxAge = "1h"
  [caches.getjson]
    maxAge = "1h"
  [caches.images]
    maxAge = "24h"
```

**Key Settings**:
- **WhatsApp Number**: 966542761620 (Saudi Arabia)
- **Base URL**: https://halal.capulongfarms.org/
- **Language**: English (Philippines)
- **Cache Settings**: 1-hour for data, 24-hour for images

### theme.toml
**Location**: `C:\Afiq\Homepage\CapulongFarms\Chocolatey\halal-capulongfarms\themes\capulong\theme.toml`

```toml
name = "Capulong Halal"
license = "MIT"
description = "Custom theme for Capulong Farms Halal Division"
homepage = "https://halal.capulongfarms.org/"
tags = ["farm", "ecommerce", "halal", "certified", "fresh", "organic", "islamic"]
features = ["responsive"]
min_version = "0.120.0"
```

---

## 3. Data Structure

### products.yaml
**Location**: `C:\Afiq\Homepage\CapulongFarms\Chocolatey\halal-capulongfarms\data\products.yaml`

**Schema Structure**:
```yaml
categories:
  - name: "Category Display Name"
    id: "category-id"
    products:
      - name: "Product Name"
        price: "₱Price/unit"
        image: "/images/image-filename.jpg"
        available: true|false
        discontinue: true|false
```

**Current Categories**:
1. **Halal Groceries** (id: "produce")
   - Sambal Belacan, Sambal Tumis, Kicap Manis, Kicap Pekat
   - Status: All unavailable (available: false)

2. **Halal Processed Foods** (id: "processed")
   - Embotido, Burong Kapampangan, Keropok Lekor, Keropok Kering
   - Mix of available and unavailable items

3. **Halal Meat-Poultry** (id: "livestocks")
   - Duck products: Salted Eggs, Penoy, Fresh/Frozen Meat
   - Chicken: Fresh/Frozen Halal Meat
   - All available (available: true)

4. **Halal Meat-Livestocks** (id: "coursesonline")
   - Goat: Fresh/Frozen Halal Meat, Fresh Milk
   - Buffalo: Fresh Milk
   - All available (available: true)

5. **Free Islamic Literatures** (id: "coursesliteratures")
   - Madinah Arabic Course Volumes 1-3
   - Mufti Menk Ramadan Series
   - All available, all free (₱0/book)

**Product States**:
- **available: true** - Product shows with green checkmark, can be added to cart
- **available: false** - Product shows "NOT AVAILABLE" watermark, cannot be purchased
- **discontinue: true** - Product is completely hidden from website
- **discontinue: false** - Product is visible (availability depends on 'available' field)

---

## 4. Theme Architecture

### Layout Files

#### index.html
**Location**: `C:\Afiq\Homepage\CapulongFarms\Chocolatey\halal-capulongfarms\themes\capulong\layouts\index.html`

**Structure**:
1. **Hero Section** (`#home`) - Welcome message with farm photo and Google Maps
2. **Buy & Pay Section** (`#order`) - Order instructions and payment methods
3. **Products Section** (`#products`) - Tabbed product catalog with cart functionality
4. **Cart Modal** - Shopping cart overlay

**Key Features**:
- Embedded Google Map showing exact farm location (15°6'51.34"N 120°48'42.54"E)
- Dynamic product grid from `products.yaml` data
- Tab-based product categories
- Add to cart functionality with quantity controls
- WhatsApp and Messenger contact integration
- GCash payment QR code display

#### baseof.html
**Location**: `C:\Afiq\Homepage\CapulongFarms\Chocolatey\halal-capulongfarms\themes\capulong\layouts\_default\baseof.html`

**HTML Structure**:
```html
<!DOCTYPE html>
<html lang="{{ .Site.LanguageCode }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{{ .Site.Params.description }}">
    <title>{{ block "title" . }}{{ .Site.Title }}{{ end }}</title>
    
    <link rel="stylesheet" href="{{ "css/style.css" | relURL }}?v=20251105">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    
    <meta name="whatsapp-number" content="{{ .Site.Params.whatsapp_number }}">
</head>
<body>
    {{ partial "header.html" . }}
    <main>{{ block "main" . }}{{ end }}</main>
    {{ partial "footer.html" . }}
    {{ partial "contacts-button.html" . }}
    
    <script src="{{ "js/cart.js" | relURL }}" defer></script>
    <script src="{{ "js/app.js" | relURL }}" defer></script>
    <!-- Navigation active link script -->
</body>
</html>
```

**Features**:
- CSS cache busting with version parameter
- Font Awesome icons integration
- WhatsApp number meta tag for JavaScript access
- Deferred JavaScript loading

### Partial Templates

#### header.html
**Location**: `C:\Afiq\Homepage\CapulongFarms\Chocolatey\halal-capulongfarms\themes\capulong\layouts\partials\header.html`

```html
<header class="site-header">
    <div class="container">
        <div class="header-content">
            <nav class="main-nav">
                <ul>
                    {{ range .Site.Menus.main }}
                    <li><a href="{{ .URL }}" {{ with .Params.class }}class="{{ . }}"{{ end }}>{{ .Name }}</a></li>
                    {{ end }}
                </ul>
            </nav>
            <div class="cart-actions">
                <button class="cart-icon-btn" id="cart-button" title="View Cart">
                    <i class="fas fa-shopping-cart"></i>
                    <span id="cart-count" class="cart-badge">0</span>
                </button>
            </div>
        </div>
    </div>
</header>
```

#### footer.html
**Location**: `C:\Afiq\Homepage\CapulongFarms\Chocolatey\halal-capulongfarms\themes\capulong\layouts\partials\footer.html`

```html
<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <p>&copy; {{ now.Year }} Capulong Farms Org. All rights reserved.</p>
            <p>Fresh produce from Lanang Candaba Pampanga Philippines</p>
        </div>
    </div>
</footer>
```

#### contacts-button.html
**Location**: `C:\Afiq\Homepage\CapulongFarms\Chocolatey\halal-capulongfarms\themes\capulong\layouts\partials\contacts-button.html`

**Floating Contact Buttons**:
- **WhatsApp**: Links to `https://wa.me/966542761620`
- **Facebook Messenger**: Links to `https://m.me/61582708015159`

---

## 5. Static Assets

### CSS Structure
**Location**: `C:\Afiq\Homepage\CapulongFarms\Chocolatey\halal-capulongfarms\themes\capulong\static\css\style.css`

**CSS Custom Properties**:
```css
:root {
  --primary-color: #2d8659;
  --secondary-color: #f4a259;
  --text-dark: #333;
  --text-light: #666;
  --bg-light: #f8f9fa;
  --white: #ffffff;
  --border-color: #e0e0e0;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.15);
  --shadow-lg: 0 8px 20px rgba(0,0,0,0.2);
}
```

**Key Sections**:
1. **Reset and Base Styles** - Global styles, container, responsive setup
2. **Header & Navigation** - Fixed header with cart button
3. **Hero Section** - Green gradient background
4. **Products Section** - Grid layout with tabs
5. **Product Cards** - Card design with hover effects
6. **Cart Modal** - Overlay shopping cart
7. **Floating Contacts** - WhatsApp/Messenger buttons
8. **Responsive Design** - Mobile-first approach

### JavaScript Functionality

#### cart.js
**Location**: `C:\Afiq\Homepage\CapulongFarms\Chocolatey\halal-capulongfarms\themes\capulong\static\js\cart.js`

**Core Functions**:
- `getCart()` / `saveCart()` - localStorage management
- `addToCart()` / `addToCartWithQuantity()` - Add products to cart
- `updateCartCount()` - Update cart badge number
- `proceedToBuy()` - Generate WhatsApp message and order flow
- `openCartModal()` / `closeCartModal()` - Cart modal management
- `renderCartItems()` - Display cart contents
- `updateCartQuantity()` / `removeFromCart()` - Cart item management
- `clearCart()` - Empty the cart

**Key Features**:
- localStorage persistence
- Quantity validation (1-9999 range)
- WhatsApp order integration
- Dual-platform messaging (WhatsApp + Messenger)
- Mobile-friendly touch events
- Auto-clear cart after order

#### app.js
**Location**: `C:\Afiq\Homepage\CapulongFarms\Chocolatey\halal-capulongfarms\themes\capulong\static\js\app.js`

**Core Functions**:
- `initializeTabs()` - Product category tab switching with external link support
- `getContactMessage()` - Build message from cart contents
- `attachFloatingContactHandlers()` - Handle contact button clicks

**External Link Navigation**:
- **Feature**: Detects tabs with `data-external-link` attribute
- **Behavior**: Opens external links in new tab via `window.open()`
- **Implementation**: Uses `e.preventDefault()` to prevent default button behavior
- **Example**: "More Capulong Farms Products" tab redirects to https://capulongfarms.org/

**Contact Integration**:
- **WhatsApp**: 966542761620
- **Messenger**: 61582708015159
- **Fallback Message**: "Hi, I browsed your products and I am interested to purchase. Kindly return my message for more details?"

---

## 6. Content Management

### Product Management Process

1. **Add New Product**:
   ```yaml
   - name: "Product Name"
     price: "₱Price/unit"
     image: "/images/PREFIX-ProductName.jpg"
     available: true
     discontinue: false
   ```

2. **Update Product Availability**:
   - Set `available: false` for seasonal unavailability
   - Set `discontinue: true` to hide completely

3. **Image Requirements**:
   - Upload to `/static/images/` directory
   - Follow naming convention: `PREFIX-ProductName.jpg`
   - Fallback to `/images/placeholder.png` if missing

### Image Naming Conventions

- **GR-*** - Halal Groceries
- **PF-*** - Processed Foods  
- **LP-*** - Livestock & Poultry
- **TL-*** - Training Literature
- **halal-photo.jpg** - Halal certification badge (renamed from farm-photo.jpg)
- **gcash-qr.png** - Payment QR code
- **placeholder*.png** - Fallback images

---

## 7. Key Features

### Shopping Cart System

**Features**:
- Local storage persistence
- Quantity management (1-9999)
- Real-time cart count badge
- Modal cart interface
- Mobile touch support
- Order generation for WhatsApp/Messenger

**Order Flow**:
1. Customer adds products to cart
2. Reviews cart in modal
3. Clicks "Proceed to Buy"
4. Auto-generates order message
5. Opens WhatsApp with pre-filled order
6. Option to also send via Messenger
7. Cart auto-clears after order

### WhatsApp Integration

**Phone Number**: +966542761620 (Saudi Arabia)  
**Message Format**:
```
I would like to order the following items:

• Product Name (₱Price/unit) x Quantity
• Product Name (₱Price/unit) x Quantity

Total: ₱XXX.XX

Please confirm availability and delivery.
```

### Payment System

**GCash QR Code**: Located at `/images/gcash-qr.png`  
**Display**: Embedded in Buy & Pay section  
**Process**: Customer scans QR code for payment after order confirmation  

### Product Availability System

**Two-Level System**:
1. **Discontinue Status**: `discontinue: true/false`
   - Controls product visibility
   - Hidden products don't appear on website
   
2. **Availability Status**: `available: true/false`  
   - Controls purchasing ability
   - Unavailable products show "NOT AVAILABLE" watermark
   - Cannot be added to cart

### Contact Integration

**Multiple Channels**:
- **WhatsApp Business**: Primary contact method
- **Facebook Messenger**: Secondary contact
- **Facebook Page**: https://www.facebook.com/share/1A1hf1n4rs/
- **Location**: Embedded Google Maps

---

## 8. Development Commands

### Hugo Static Site Generator

**Development**:
```bash
# Start development server with drafts
hugo server -D

# Development server without drafts  
hugo server

# URL: http://localhost:1313
# Live reload: Automatic on file changes
```

**Production Build**:
```bash
# Build for production
hugo

# Build with drafts
hugo -D

# Output: /public/ directory
```

### File Editing Workflow

1. **Product Changes**: Edit `data/products.yaml`
2. **Style Changes**: Edit `themes/capulong/static/css/style.css`
3. **Layout Changes**: Edit `themes/capulong/layouts/*.html`
4. **Configuration**: Edit `hugo.toml`
5. **Test Changes**: `hugo server -D`
6. **Build**: `hugo`
7. **Deploy**: Upload `/public/` contents

---

## 9. Deployment Configuration

### Domain Setup
- **Production URL**: https://halal.capulongfarms.org/
- **CDN**: Cloudflare (based on previous documentation)
- **SSL**: Automatic through Cloudflare

### Cache Settings
```toml
[caches]
  [caches.getcsv]
    maxAge = "1h"
  [caches.getjson]
    maxAge = "1h"  
  [caches.images]
    maxAge = "24h"
```

### CSS Cache Busting
- Version parameter: `?v=20251105`
- Location: `baseof.html` line 10
- Update version when CSS changes

---

## 10. Business Context

### Transformation History
**Original**: Capulong Farms - Traditional farm-to-table business  
**Current**: Halal Capulong Farms - Islamic-certified grocery store

### Target Market
- **Primary**: Muslim consumers seeking halal-certified products
- **Location**: Philippines (specifically Pampanga region)
- **Products**: Halal groceries, processed foods, meat, poultry, educational materials

### Contact Information
- **WhatsApp**: +966542761620 (Saudi Arabia number)
- **Messenger**: Facebook Page ID 61582708015159
- **Location**: Lanang, Candaba, Pampanga, Philippines
- **Coordinates**: 15°6'51.34"N 120°48'42.54"E

### Payment Methods
- **Primary**: GCash (Philippine digital wallet)
- **QR Code**: Embedded in website for easy scanning
- **Process**: Order via WhatsApp → Pay via GCash → Delivery confirmation

---

## 11. Technical Stack Summary

**Framework**: Hugo Static Site Generator v0.120.0+  
**Theme**: Custom "capulong" theme  
**Frontend**: HTML5, CSS3, Vanilla JavaScript  
**Data Storage**: YAML files, localStorage (cart)  
**Icons**: Font Awesome 5.15.4  
**Responsive**: Mobile-first design  
**Performance**: Static generation, CDN delivery, image optimization  
**Browser Support**: Modern browsers (ES6+ JavaScript)  

**Dependencies**:
- Hugo (Static Site Generator)
- Font Awesome (Icons)
- No Node.js dependencies
- No PWA features (removed)
- No Netlify dependencies (removed)

---

## 12. File Inventory

### Critical Files (Must Not Delete)
- `hugo.toml` - Main configuration
- `data/products.yaml` - Product catalog
- `themes/capulong/layouts/index.html` - Homepage
- `themes/capulong/static/css/style.css` - Stylesheet
- `themes/capulong/static/js/cart.js` - Cart functionality
- `themes/capulong/static/js/app.js` - Application logic

### Essential Images
- `/static/images/gcash-qr.png` - Payment QR code
- `/static/images/halal-photo.jpg` - Halal certification badge (renamed to prevent cache conflict)
- `/static/images/placeholder.png` - Fallback image

### Generated/Cache Files (Can Delete)
- `/public/` - Generated site
- `/resources/` - Hugo cache

### Documentation Files
- `README.md` - Project structure guide
- `CLAUDE.md` - Development instructions
- `STABLE_STATE_DOCUMENTATION.md` - Previous state reference
- `COMPREHENSIVE_DOCUMENTATION.md` - This complete documentation

---

## 13. Recent Changes (Git History)

```
c997ab5 Fix external link navigation for 'More Capulong Farms Products' tab ⭐ LATEST FIX
3d5d3ba Fix image cache conflict and add external link navigation
fefd236 Reorganize product categories from 5 to 3 categories for better navigation
5279bed Fix watermark text truncation for full 'NOT AVAILABLE' visibility
0fb0151 Enhance 'NOT AVAILABLE' watermark with Ferrari red styling
f1e1d32 Update comprehensive stable state documentation for halal grocery store
9e68bcb Remove test text from homepage title
d2615c5 Transform business from farm to halal grocery store  ⭐ KEY TRANSFORMATION
fd152ab Test deployment pipeline - add Tested251105 to h1
36b8af3 Customize for halal business branding and certification
```

**Latest Fix** (commit c997ab5): Fixed external link navigation for "More Capulong Farms Products" tab by adding preventDefault() to tab click handler. This ensures the tab redirects properly to https://capulongfarms.org/ without showing fallback message, enabling seamless hyperlink loop between halal and main farm portals.

**Key Transformation** (commit d2615c5): Complete business model change from traditional farm to halal grocery store specializing in Islamic-certified products.

---

## 14. Future Maintenance

### Regular Tasks
1. **Update Product Availability**: Edit `available: true/false` in `products.yaml`
2. **Add New Products**: Follow schema in `products.yaml`, add images to `/static/images/`
3. **Price Updates**: Modify `price:` field in `products.yaml`
4. **Contact Info Changes**: Update `whatsapp_number` in `hugo.toml`

### Seasonal Management
- **Unavailable Products**: Set `available: false` (shows NOT AVAILABLE)
- **Discontinued Products**: Set `discontinue: true` (completely hidden)
- **New Categories**: Add new category with `id` and `products` array

### Performance Monitoring
- **CSS Cache**: Update version in `baseof.html` when CSS changes
- **Image Optimization**: Compress images before uploading
- **Hugo Version**: Keep Hugo updated for security and features

---

This comprehensive documentation provides a complete reference for understanding, maintaining, and extending the Halal Capulong Farms website. It serves as both a technical reference and business context guide for the Islamic-certified grocery store e-commerce platform.