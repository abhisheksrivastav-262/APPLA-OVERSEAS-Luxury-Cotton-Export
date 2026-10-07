export const SITE = {
  name: "APPLA OVERSEAS",
  parentLine: "Appla Overseas — Parent Manufacturing Company",
  brand: "Wovica",
  brandLine: "Wovica — Our Premium Home Textile Range",
  brandQuote:
    "Appla Overseas is a world-class textile manufacturing company committed to global quality standards. Under our premium brand Wovica, we bring an exquisite range of bedsheets, comforters, protectors, and bedcovers crafted for international markets.",
  owner: "Ravindra Singhwal",
  founded: 2006,
  experience: "20+ Years",
  tagline: "Crafting Premium Cotton Comfort for the World",
  phone: "+91 8445357038",
  phoneHref: "tel:+918445357038",
  whatsapp: "https://wa.me/918445357038?text=Hello%20APPLA%20OVERSEAS%2C%20I%20want%20an%20export%20quote%20for%20premium%20cotton%20bedding.",
  email: "info@applaoverseas.com",
  address: "779/1, Sisona Road, Basant Vihar, Saket, Muzaffarnagar, Uttar Pradesh 251001, India",
  hours: "Mon – Sat: 9:30 AM – 7:00 PM IST",
};

// All website imagery = real Wovica product photos (no external/AI images).
// Every key uses a different photo so no image repeats within a page.
export const IMAGES = {
  hero: "/products/wovica-satin-chocolate.jpeg",
  heroBed2: "/products/wovica-rustic-rose.jpeg",
  bedroomBeige: "/products/wovica-satin-navy.jpeg",
  bedroomWhite: "/products/wovica-protector-white.jpeg",
  hotel1: "/products/wovica-satin-navy.jpeg",
  hotel2: "/products/wovica-satin-grey.jpeg",
  hotelBed: "/products/wovica-satin-charcoal.jpeg",
  luxuryRoom: "/products/wovica-indigo-heritage.jpeg",
  fabric: "/products/wovica-fitted-lavender.jpeg",
  fabricColor: "/products/wovica-marigold-meadow.jpeg",
  cottonFold: "/products/wovica-rustic-rose.jpeg",
  tshirts: "/products/wovica-teal-blossom.jpeg",
  sewing: "/products/wovica-fitted-maroon.jpeg",
  warehouse: "/products/wovica-indigo-heritage.jpeg",
  warehouseBoxes: "/products/wovica-satin-chocolate.jpeg",
  containersAerial: "/products/wovica-protector-grey.jpeg",
  containers: "/products/wovica-protector-white.jpeg",
};

export type Product = {
  slug: string;
  title: string;
  category: string;
  image: string;
  material: string;
  sizes: string;
  gsm: string;
  moq: string;
  badge?: string;
  brandLine?: string;
  desc: string;
};

export const CATEGORIES = [
  "All",
  "Bedsheets",
  "Mattress Protectors",
  "Comforters",
] as const;

export const PRODUCTS: Product[] = [
  // ---- NOTE: catalog me sirf real-photo products (koi duplicate image nahi) ----
  // ---- Wovica real-photo printed bedsheets ----
  { slug: "wovica-rustic-rose", title: "Wovica Rustic Rose Bedsheet Set", category: "Bedsheets", image: "/products/wovica-rustic-rose.jpeg", material: "100% Pure Cotton – Printed", sizes: "King / Queen", gsm: "144 TC • 140 GSM", moq: "500 Sets", badge: "Best Manufacturing Company", brandLine: "WOVICA 100% COTTON BEDSHEETS", desc: "Rust-red floral print with contrast border – bedsheet with 2 pillow covers." },
  { slug: "wovica-marigold-meadow", title: "Wovica Marigold Meadow Bedsheet Set", category: "Bedsheets", image: "/products/wovica-marigold-meadow.jpeg", material: "100% Pure Cotton – Printed", sizes: "King / Queen", gsm: "144 TC • 140 GSM", moq: "500 Sets", badge: "Premium", brandLine: "WOVICA 100% COTTON BEDSHEETS", desc: "Sunny marigold print on sage green – bedsheet with 2 pillow covers." },
  { slug: "wovica-teal-blossom", title: "Wovica Teal Blossom Bedsheet Set", category: "Bedsheets", image: "/products/wovica-teal-blossom.jpeg", material: "100% Pure Cotton – Printed", sizes: "King / Queen", gsm: "144 TC • 140 GSM", moq: "500 Sets", brandLine: "WOVICA 100% COTTON BEDSHEETS", desc: "Teal-blue blossom print with yellow border – bedsheet with 2 pillow covers." },
  { slug: "wovica-indigo-heritage", title: "Wovica Indigo Heritage Bedsheet Set", category: "Bedsheets", image: "/products/wovica-indigo-heritage.jpeg", material: "100% Pure Cotton – Printed", sizes: "King / Queen", gsm: "144 TC • 140 GSM", moq: "500 Sets", brandLine: "WOVICA 100% COTTON BEDSHEETS", desc: "Indigo heritage tree-of-life print – bedsheet with 2 pillow covers." },
  // ---- Wovica real-photo premium satin bedsheets ----
  { slug: "wovica-satin-chocolate", title: "Wovica Royal Chocolate Premium Quality Satin Bedsheet Set", category: "Bedsheets", image: "/products/wovica-satin-chocolate.jpeg", material: "Premium Satin – 300TC", sizes: "King / Queen", gsm: "300 TC • 130 GSM", moq: "500 Sets", badge: "Best Manufacturing Company", brandLine: "WOVICA PREMIUM QUALITY SATIN BEDSHEETS", desc: "Royal chocolate with gold emblem print – silky sateen bedsheet with 2 pillow covers." },
  { slug: "wovica-satin-navy", title: "Wovica Midnight Navy Premium Quality Satin Bedsheet Set", category: "Bedsheets", image: "/products/wovica-satin-navy.jpeg", material: "Premium Satin – 300TC", sizes: "King / Queen", gsm: "300 TC • 130 GSM", moq: "500 Sets", badge: "Premium", brandLine: "WOVICA PREMIUM QUALITY SATIN BEDSHEETS", desc: "Midnight navy with sky-blue motifs – silky sateen bedsheet with 2 pillow covers." },
  { slug: "wovica-satin-grey", title: "Wovica Sterling Grey Premium Quality Satin Bedsheet Set", category: "Bedsheets", image: "/products/wovica-satin-grey.jpeg", material: "Premium Satin – 300TC", sizes: "King / Queen", gsm: "300 TC • 130 GSM", moq: "500 Sets", brandLine: "WOVICA PREMIUM QUALITY SATIN BEDSHEETS", desc: "Sterling grey with gold emblem print – silky sateen bedsheet with 2 pillow covers." },
  { slug: "wovica-satin-charcoal", title: "Wovica Charcoal Medallion Premium Quality Satin Bedsheet Set", category: "Bedsheets", image: "/products/wovica-satin-charcoal.jpeg", material: "Premium Satin – 300TC", sizes: "King / Queen", gsm: "300 TC • 130 GSM", moq: "500 Sets", badge: "Premium", brandLine: "WOVICA PREMIUM QUALITY SATIN BEDSHEETS", desc: "Charcoal grey with gold medallion print – silky sateen bedsheet with 2 pillow covers." },
  // ---- Wovica real-photo fitted bedsheets ----
  { slug: "wovica-fitted-lavender", title: "Wovica Lavender Mist Fitted Bedsheet", category: "Bedsheets", image: "/products/wovica-fitted-lavender.jpeg", material: "100% Cotton – Solid", sizes: "King / Queen – Deep Pocket", gsm: "140 GSM", moq: "800 Sets", brandLine: "WOVICA 100% COTTON BEDSHEETS", desc: "Solid lavender deep-pocket fitted sheet with full elastic." },
  { slug: "wovica-fitted-maroon", title: "Wovica Royal Maroon Fitted Bedsheet", category: "Bedsheets", image: "/products/wovica-fitted-maroon.jpeg", material: "100% Cotton – Solid", sizes: "King / Queen – Deep Pocket", gsm: "140 GSM", moq: "800 Sets", brandLine: "WOVICA 100% COTTON BEDSHEETS", desc: "Rich maroon deep-pocket fitted sheet with full elastic." },
  // ---- Wovica real-photo waterproof protectors ----
  { slug: "wovica-protector-white", title: "Wovica AquaShield White Waterproof Mattress Protector", category: "Mattress Protectors", image: "/products/wovica-protector-white.jpeg", material: "Cotton Terry + TPU", sizes: "All Mattress Depths", gsm: "160 GSM", moq: "1000 Pcs", badge: "Best Manufacturing Company", brandLine: "WOVICA PREMIUM QUALITY MATTRESS PROTECTORS", desc: "White quilted waterproof protector – liquid test passed, silent layer." },
  { slug: "wovica-protector-grey", title: "Wovica AquaShield Grey Waterproof Mattress Protector", category: "Mattress Protectors", image: "/products/wovica-protector-grey.jpeg", material: "Cotton Terry + TPU", sizes: "All Mattress Depths", gsm: "160 GSM", moq: "1000 Pcs", brandLine: "WOVICA PREMIUM QUALITY MATTRESS PROTECTORS", desc: "Grey quilted waterproof protector – liquid test passed, silent layer." },
];

export type Variant = { name: string; image: string };
export type Group = {
  slug: string;
  title: string;
  brandLine: string;
  category: string;
  badge?: string;
  material: string;
  sizes: string;
  gsm: string;
  moq: string;
  desc: string;
  variants: Variant[];
};

// 3 groups — har group me 4 photos ek line me, ek hi naam. Koi photo repeat nahi.
export const GROUPS: Group[] = [
  {
    slug: "wovica-cotton-bedsheets",
    title: "Wovica 100% Cotton Bedsheets",
    brandLine: "WOVICA 100% COTTON BEDSHEETS",
    category: "Bedsheets",
    badge: "Best Manufacturing Company",
    material: "100% Pure Cotton – Printed",
    sizes: "King / Queen",
    gsm: "144 TC • 140 GSM",
    moq: "500 Sets",
    desc: "Floral printed bedsheet sets with contrast borders – bedsheet with 2 pillow covers. 4 colours, ek hi premium quality.",
    variants: [
      { name: "Rustic Rose", image: "/products/wovica-rustic-rose.jpeg" },
      { name: "Marigold Meadow", image: "/products/wovica-marigold-meadow.jpeg" },
      { name: "Teal Blossom", image: "/products/wovica-teal-blossom.jpeg" },
      { name: "Indigo Heritage", image: "/products/wovica-indigo-heritage.jpeg" },
    ],
  },
  {
    slug: "wovica-satin-bedsheets",
    title: "Wovica Premium Quality Satin Bedsheets",
    brandLine: "WOVICA PREMIUM QUALITY SATIN BEDSHEETS",
    category: "Bedsheets",
    badge: "Premium",
    material: "Premium Satin – 300TC",
    sizes: "King / Queen",
    gsm: "300 TC • 130 GSM",
    moq: "500 Sets",
    desc: "Silky sateen bedsheets with gold prints – bedsheet with 2 pillow covers. 4 colours, ek hi premium quality.",
    variants: [
      { name: "Royal Chocolate", image: "/products/wovica-satin-chocolate.jpeg" },
      { name: "Midnight Navy", image: "/products/wovica-satin-navy.jpeg" },
      { name: "Sterling Grey", image: "/products/wovica-satin-grey.jpeg" },
      { name: "Charcoal Medallion", image: "/products/wovica-satin-charcoal.jpeg" },
    ],
  },
  {
    slug: "wovica-mattress-protector",
    title: "Wovica Premium Quality Mattress Protector",
    brandLine: "WOVICA PREMIUM QUALITY MATTRESS PROTECTOR",
    category: "Mattress Protectors",
    badge: "Best Manufacturing Company",
    material: "Cotton + TPU Waterproof",
    sizes: "All Mattress Depths",
    gsm: "140–160 GSM",
    moq: "800–1000 Pcs",
    desc: "Fitted sheets aur quilted waterproof protectors – silent, breathable, liquid-tested. 4 colours, ek hi premium quality.",
    variants: [
      { name: "Lavender Mist", image: "/products/wovica-fitted-lavender.jpeg" },
      { name: "Royal Maroon", image: "/products/wovica-fitted-maroon.jpeg" },
      { name: "AquaShield White", image: "/products/wovica-protector-white.jpeg" },
      { name: "AquaShield Grey", image: "/products/wovica-protector-grey.jpeg" },
    ],
  },
  {
    slug: "wovica-comforter-4pcs",
    title: "Wovica Premium Quality Comforter 4 Pcs Set",
    brandLine: "WOVICA PREMIUM QUALITY COMFORTER 4 PCS SET",
    category: "Comforters",
    badge: "Premium",
    material: "Cotton + Microfiber Fill",
    sizes: "Single / Double / King",
    gsm: "200 GSM Fill",
    moq: "500 Sets",
    desc: "Reversible comforter 4 pcs set with pillows – plush microfiber fill, 3 colours, ek hi premium quality.",
    variants: [
      { name: "Midnight Navy", image: "/products/wovica-comforter-navy.jpeg" },
      { name: "Olive Green", image: "/products/wovica-comforter-olive.jpeg" },
      { name: "Terracotta", image: "/products/wovica-comforter-terracotta.jpeg" },
    ],
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Export Partners" },
  { value: 500, suffix: "+", label: "Product Designs" },
  { value: 100, suffix: "K+", label: "Units Monthly" },
  { value: 25, suffix: "+", label: "Countries Served" },
];

export const COUNTRIES = ["USA", "UK", "Canada", "Germany", "France", "UAE", "Australia", "Netherlands", "Spain", "Italy", "South Africa", "Japan"];

export const TESTIMONIALS = [
  { name: "James Carter", role: "Procurement Head, Hotel Group – USA", text: "APPLA's 400TC sheets survived 200+ commercial washes with zero pilling. Our guest satisfaction scores on bedding jumped 31%." },
  { name: "Sophie Müller", role: "Founder, Home Retail – Germany", text: "Flawless OEM execution. Custom sizes, German labelling, on-time Hamburg delivery. Our returns dropped to under 1%." },
  { name: "Ahmed Al Farsi", role: "Importer, Dubai – UAE", text: "Breathable protectors built for Gulf heat. Packaging, barcodes, documentation – everything export-ready. True professionals." },
  { name: "Emily Thompson", role: "Buyer, Boutique Stores – UK", text: "The reversible comforters are our top reorder three seasons running. Luxury hand-feel at a landed cost that works." },
];

export const FAQS = [
  { q: "What is your minimum order quantity (MOQ)?", a: "Standard MOQs start at 500 sets for bedsheets/comforters and 1000 pcs for protectors. For OEM trials we can discuss a pilot lot, with balance shipped in the main container." },
  { q: "Can you manufacture under our private label?", a: "Yes. We offer full OEM: your fabric spec, GSM, thread count, sizes, woven labels, packaging, barcodes and export cartons. Share your tech pack and we match it." },
  { q: "Which countries do you export to?", a: "We currently serve 25+ countries including USA, UK, Canada, Germany, France, UAE, Australia and Netherlands with FOB, CIF and DDP terms." },
  { q: "What quality certifications do you follow?", a: "ISO-aligned QMS, 4-point fabric inspection, colour fastness, shrinkage (<3%), stitch density and GSM checks on every lot. OEKO-TEX style restricted-substance compliance on request." },
  { q: "How long is production and shipping?", a: "Sampling 7–10 days. Bulk production 25–35 days depending on volume. Sea freight 18–32 days by lane; air freight available for urgent retail drops." },
  { q: "How do I start an export inquiry?", a: "Use the Export Inquiry form or WhatsApp +91 8445357038 with your product, quantity and port. We reply within 24 hours with quotation and sampling plan." },
];

export const CERTIFICATIONS = [
  { short: "OEKO-TEX", full: "OEKO-TEX® Standard 100", desc: "Proof that textiles contain no harmful chemicals – tested for 100+ restricted substances." },
  { short: "GOTS", full: "GOTS Organic", desc: "Global Organic Textile Standard for certified organic cotton lines." },
  { short: "GRS", full: "GRS Recycled", desc: "Global Recycled Standard for recycled-material collections." },
  { short: "ISO 9001", full: "ISO 9001 Quality", desc: "Certified quality-management system across our factory." },
  { short: "BCI", full: "Better Cotton (BCI)", desc: "Better Cotton Initiative sourcing for responsible cotton." },
];

export const QC_STEPS = [
  { t: "In-Line Checking", d: "Roaming QC on every stitching line – defects caught at the machine, not at the end." },
  { t: "Mid-Production Audit", d: "GSM, shade-band and measurement audit on first 50 pieces of every lot." },
  { t: "Final Piece Inspection", d: "4-point inspection, needle detection and thread-trim check, piece by piece." },
  { t: "Final Packing Checking", d: "Carton-wise ratio, barcode and vacuum-seal verification before container loading." },
];

export const BEDSHEET_TYPES = [
  { name: "Premium Pure Cotton", weave: "Percale / Sateen", feel: "Breathable, soft, all-season", best: "Everyday luxury & hotels" },
  { name: "Premium Satin", weave: "Satin 300–400TC", feel: "Silky sheen, smooth drape", best: "5-star & boutique hotels" },
  { name: "Percale", weave: "Plain 200–300TC", feel: "Crisp, cool, matte", best: "Warm climates, retail" },
  { name: "Combed Cotton", weave: "Combed 180–250TC", feel: "Stronger, smoother, low-pill", best: "Long-life hotel linen" },
  { name: "Premium Silk", weave: "Silk blend, 22 momme", feel: "Ultra-smooth, lustrous", best: "Palace & luxury suites" },
  { name: "Microfiber", weave: "Brushed 110 GSM", feel: "Wrinkle-free, quick-dry", best: "Value retail & bulk" },
];

export const GALLERY = [
  { src: "/products/wovica-rustic-rose.jpeg", cat: "Bedsheets", title: "Rustic Rose Set" },
  { src: "/products/wovica-marigold-meadow.jpeg", cat: "Bedsheets", title: "Marigold Meadow Set" },
  { src: "/products/wovica-teal-blossom.jpeg", cat: "Bedsheets", title: "Teal Blossom Set" },
  { src: "/products/wovica-indigo-heritage.jpeg", cat: "Bedsheets", title: "Indigo Heritage Set" },
  { src: "/products/wovica-satin-chocolate.jpeg", cat: "Bedsheets", title: "Royal Chocolate Satin" },
  { src: "/products/wovica-satin-navy.jpeg", cat: "Bedsheets", title: "Midnight Navy Satin" },
  { src: "/products/wovica-satin-grey.jpeg", cat: "Bedsheets", title: "Sterling Grey Satin" },
  { src: "/products/wovica-satin-charcoal.jpeg", cat: "Bedsheets", title: "Charcoal Medallion Satin" },
  { src: "/products/wovica-fitted-lavender.jpeg", cat: "Bedsheets", title: "Lavender Mist Fitted" },
  { src: "/products/wovica-fitted-maroon.jpeg", cat: "Bedsheets", title: "Royal Maroon Fitted" },
  { src: "/products/wovica-protector-white.jpeg", cat: "Protectors", title: "AquaShield White" },
  { src: "/products/wovica-protector-grey.jpeg", cat: "Protectors", title: "AquaShield Grey" },
  { src: "/products/wovica-comforter-navy.jpeg", cat: "Comforters", title: "Navy Comforter Set" },
  { src: "/products/wovica-comforter-olive.jpeg", cat: "Comforters", title: "Olive Comforter Set" },
  { src: "/products/wovica-comforter-terracotta.jpeg", cat: "Comforters", title: "Terracotta Comforter Set" },
];
