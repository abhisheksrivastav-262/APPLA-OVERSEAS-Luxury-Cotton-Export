export const SITE = {
  name: "APPLA OVERSEAS",
  parentLine: "Appla Overseas — Parent Manufacturing Company",
  brand: "Vovika",
  brandLine: "Vovika — Our Premium Home Textile Range",
  brandQuote:
    "Appla Overseas is a world-class textile manufacturing company committed to global quality standards. Under our premium brand Vovika, we bring an exquisite range of bedsheets, comforters, protectors, and bedcovers crafted for international markets.",
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

export const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  hero: img("1522771739844-6a9f6d5f14af", 2000),
  heroBed2: img("1505693416388-ac5ce068fe85", 1600),
  bedroomBeige: img("1615874959474-d609969a20ed", 1400),
  bedroomWhite: img("1540518614846-7eded433c457", 1400),
  bedWhite: img("1631049307264-da0ec9d70304", 1400),
  hotel1: img("1590490360182-c33d57733427", 1400),
  hotel2: img("1582719478250-c89cae4dc85b", 1600),
  hotelBed: img("1578683010236-d716f9a3f461", 1400),
  luxuryRoom: img("1567016432779-094069958ea5", 1400),
  smallBedroom: img("1595526114035-0d45ed16cfbf", 1200),
  fabric: img("1558769132-cb1aea458c5e", 1400),
  fabricColor: img("1528459801416-a9e53bbf4e17", 1400),
  cottonFold: img("1620799140408-edc6dcb6d633", 1400),
  tshirts: img("1523381210434-271e8be1f52b", 1400),
  sewing: img("1605518216938-7c31b7b14ad0", 1400),
  warehouse: img("1586528116311-ad8dd3c8310d", 1400),
  warehouseBoxes: img("1578575437130-527eed3abbec", 1400),
  containersAerial: img("1494412574643-ff11b0a5c1c3", 1600),
  containers: img("1605745341112-85968b19335b", 1400),
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
  desc: string;
};

export const CATEGORIES = [
  "All",
  "Bedsheets",
  "Bedcovers",
  "Comforters",
  "Mattress Protectors",
  "Pillows",
  "Hotel Linen",
  "OEM",
] as const;

export const PRODUCTS: Product[] = [
  { slug: "signature-400tc-white-bedsheet", title: "Signature 400TC White Bedsheet Set", category: "Bedsheets", image: img("1505693416388-ac5ce068fe85", 1000), material: "100% Long-Staple Cotton", sizes: "King / Queen / Twin", gsm: "140 GSM • 400TC", moq: "500 Sets", badge: "Best Manufacturing Company", desc: "Crisp hotel-white percale with sateen finish, deep-hem stitching and zero pilling." },
  { slug: "royal-sateen-printed-bedsheet", title: "Royal Sateen Printed Bedsheet", category: "Bedsheets", image: img("1522771739844-6a9f6d5f14af", 1000), material: "100% Cotton Sateen", sizes: "King / Queen", gsm: "130 GSM • 300TC", moq: "500 Sets", badge: "Premium", desc: "Elegant jewel-tone prints with colour-fast reactive dyes for retail brands." },
  { slug: "solid-dyed-bedsheet-collection", title: "Solid Dyed Bedsheet – 24 Colours", category: "Bedsheets", image: img("1615874959474-d609969a20ed", 1000), material: "100% Cotton", sizes: "All Sizes + Custom", gsm: "125–145 GSM", moq: "1000 Pcs", desc: "Garment-dyed solids with shrinkage control under 3% for private label." },
  { slug: "fitted-bedsheet-deep-pocket", title: "Deep-Pocket Fitted Bedsheet", category: "Bedsheets", image: img("1631049307264-da0ec9d70304", 1000), material: "100% Cotton + Elastic", sizes: "Up to 18\" Pocket", gsm: "135 GSM • 300TC", moq: "800 Pcs", badge: "Export Quality", desc: "Full elastic + reinforced corners, tailored for 5-star hotel mattresses." },
  { slug: "hotel-stripe-bedsheet", title: "Hotel Stripe Dobby Bedsheet", category: "Hotel Linen", image: img("1578683010236-d716f9a3f461", 1000), material: "100% Cotton Dobby", sizes: "Hotel King / Cal King", gsm: "140 GSM", moq: "1000 Pcs", badge: "Hotel Grade", desc: "Classic 1cm satin stripe, 60s yarn, iron-friendly for commercial laundry." },
  { slug: "quilt-cover-sateen-set", title: "Luxury Quilt Cover Set", category: "Bedsheets", image: img("1540518614846-7eded433c457", 1000), material: "Cotton Sateen", sizes: "King / Queen", gsm: "300TC", moq: "500 Sets", desc: "Hidden-button closure, corner ties, matching pillow covers included." },
  { slug: "down-comforter-500tc", title: "Grand 500TC Down-Alternative Comforter", category: "Comforters", image: img("1582719478250-c89cae4dc85b", 1000), material: "Cotton Shell + Microfiber", sizes: "Twin – Oversized King", gsm: "250–400 GSM Fill", moq: "500 Pcs", badge: "Luxury", desc: "Box-stitched, reversible cloud fill with corner loops for duvet use." },
  { slug: "winter-warm-comforter", title: "Arctic Winter Comforter", category: "Comforters", image: img("1567016432779-094069958ea5", 1000), material: "Brushed Microfiber", sizes: "Single / Double / King", gsm: "350 GSM", moq: "500 Pcs", desc: "Extra-loft siliconized fill for -5°C comfort, anti-shift quilting." },
  { slug: "reversible-comforter-duo", title: "Reversible Duo Comforter", category: "Comforters", image: img("1595526114035-0d45ed16cfbf", 1000), material: "100% Cotton Face", sizes: "Queen / King", gsm: "200 GSM Fill", moq: "500 Pcs", badge: "Premium", desc: "Two luxury looks in one – solid / print reversible for retailers." },
  { slug: "waterproof-mattress-protector", title: "AquaShield Waterproof Protector", category: "Mattress Protectors", image: img("1631049307264-da0ec9d70304", 900), material: "Cotton Terry + TPU", sizes: "All Mattress Depths", gsm: "160 GSM", moq: "1000 Pcs", badge: "Best Manufacturing Company", desc: "Silent, breathable TPU membrane – 100% waterproof, no crinkle sound." },
  { slug: "quilted-mattress-protector", title: "Premium Quilted Mattress Protector", category: "Mattress Protectors", image: img("1505693416388-ac5ce068fe85", 900), material: "Cotton + Poly Fill", sizes: "Twin – King", gsm: "180 GSM", moq: "1000 Pcs", desc: "Diamond quilting adds 1.5cm plushness while protecting mattress life." },
  { slug: "breathable-cool-protector", title: "CoolBreeze Breathable Protector", category: "Mattress Protectors", image: img("1615874959474-d609969a20ed", 900), material: "Cotton Jersey Knit", sizes: "Custom OEM", gsm: "150 GSM", moq: "1200 Pcs", desc: "Air-flow knit for hot climates – favourite in UAE & Australia." },
  { slug: "terry-pillow-protector-pair", title: "Terry Cotton Pillow Protector (Pair)", category: "Pillows", image: img("1540518614846-7eded433c457", 900), material: "Cotton Terry + Zip", sizes: "Standard / King", gsm: "160 GSM", moq: "2000 Pcs", badge: "Export Quality", desc: "Zippered, waterproof yet soft – extends pillow life 3x for hotels." },
  { slug: "sateen-pillow-covers", title: "Sateen Pillow Covers – Set of 2", category: "Pillows", image: img("1522771739844-6a9f6d5f14af", 900), material: "100% Cotton 400TC", sizes: "20\"x30\" + Flange", gsm: "400TC", moq: "2000 Pcs", desc: "Envelope closure, French flange detail for boutique hotel look." },
  { slug: "hotel-duvet-set", title: "Hotel White Duvet Set", category: "Hotel Linen", image: img("1590490360182-c33d57733427", 1000), material: "100% Cotton Percale", sizes: "Hotel Queen / King", gsm: "200TC–400TC", moq: "800 Sets", badge: "Hotel Grade", desc: "Complete hotel bedding system: sheet + duvet + protectors, bulk ready." },
  { slug: "hotel-pillow-collection", title: "Hotel Pillow & Linen Bundle", category: "Hotel Linen", image: img("1578683010236-d716f9a3f461", 1000), material: "Cotton Blend", sizes: "Custom Hotel Spec", gsm: "As per tender", moq: "ON Tender", desc: "Tender-ready hotel kits with logo embroidery and barcoding." },
  { slug: "bed-in-a-bag-retail", title: "Retail Bed-in-a-Bag – 7 Pc", category: "Hotel Linen", image: img("1567016432779-094069958ea5", 1000), material: "Cotton Rich", sizes: "Full / Queen / King", gsm: "Mixed", moq: "1000 Sets", desc: "Retail-ready packaging with insert card for USA / UK importers." },
  { slug: "oem-private-label", title: "OEM Private Label Program", category: "OEM", image: img("1558769132-cb1aea458c5e", 1000), material: "Buyer Spec Fabric", sizes: "Fully Custom", gsm: "Custom", moq: "As low as 500", badge: "OEM", desc: "Your brand, our factory – labels, packaging, GSM and sizes to spec." },
  { slug: "sustainable-cotton-line", title: "Pure Earth Sustainable Line", category: "OEM", image: img("1528459801416-a9e53bbf4e17", 1000), material: "BCI / Organic Cotton", sizes: "Custom", gsm: "130–160 GSM", moq: "800 Pcs", badge: "Eco", desc: "Traceable cotton with eco dyes for EU sustainability mandates." },
  { slug: "kids-printed-comforter", title: "Kids Joy Printed Comforter", category: "Comforters", image: img("1595526114035-0d45ed16cfbf", 1000), material: "Cotton + Microfiber", sizes: "Single / Twin", gsm: "200 GSM", moq: "800 Pcs", desc: "Playful OEKO-TEX style prints, hypoallergenic fill for kids." },
  { slug: "euro-sham-cushion-set", title: "Euro Sham + Cushion Accent Set", category: "Pillows", image: img("1615874959474-d609969a20ed", 1000), material: "Cotton Canvas", sizes: "26\"x26\" + 18\"x18\"", gsm: "180 GSM", moq: "1500 Sets", desc: "Designer shams for home-textile retailers and staging companies." },
  { slug: "export-overstock-deal", title: "Container-Ready Assorted Lot", category: "OEM", image: img("1578575437130-527eed3abbec", 1000), material: "Mixed Cotton", sizes: "Assorted", gsm: "Mixed", moq: "1x40HQ", badge: "Bulk", desc: "Best landed-cost option – mixed designs for discount chains." },
  // ---- Bedsheet types ----
  { slug: "vovika-pure-cotton-bedsheet", title: "Vovika Pure Cotton Bedsheet", category: "Bedsheets", image: img("1522771739844-6a9f6d5f14af", 1000), material: "100% Pure Cotton", sizes: "King / Queen / Twin", gsm: "144 TC • 140 GSM", moq: "500 Sets", badge: "Best Manufacturing Company", desc: "Our flagship everyday luxury – breathable pure cotton with a soft peach finish." },
  { slug: "vovika-satin-bedsheet", title: "Premium Satin Bedsheet", category: "Bedsheets", image: img("1615874959474-d609969a20ed", 1000), material: "Cotton Satin", sizes: "King / Queen", gsm: "300–400 TC", moq: "500 Sets", badge: "Premium", desc: "Silky sateen weave with a rich sheen – the 5-star hotel favourite." },
  { slug: "vovika-percale-bedsheet", title: "Crisp Percale Bedsheet", category: "Bedsheets", image: img("1631049307264-da0ec9d70304", 1000), material: "100% Cotton Percale", sizes: "All Sizes + Custom", gsm: "200–300 TC", moq: "800 Sets", desc: "Cool, crisp matte percale that gets softer with every wash." },
  { slug: "vovika-combed-cotton-bedsheet", title: "Combed Cotton Bedsheet", category: "Bedsheets", image: img("1505693416388-ac5ce068fe85", 1000), material: "Combed Cotton", sizes: "King / Queen / Twin", gsm: "180–250 TC", moq: "800 Sets", desc: "Combed fibres remove impurities – stronger, smoother, colour-fast." },
  { slug: "vovika-silk-bedsheet", title: "Premium Silk Bedsheet", category: "Bedsheets", image: img("1540518614846-7eded433c457", 1000), material: "Premium Silk Blend", sizes: "Queen / King", gsm: "22 Momme", moq: "300 Sets", badge: "Luxury", desc: "Ultra-premium silk-touch bedsheet for boutique and palace hotels." },
  { slug: "vovika-microfiber-bedsheet", title: "Soft Microfiber Bedsheet", category: "Bedsheets", image: img("1595526114035-0d45ed16cfbf", 1000), material: "Brushed Microfiber", sizes: "All Sizes", gsm: "110 GSM", moq: "1000 Sets", desc: "Wrinkle-resistant, quick-dry microfiber at sharp container pricing." },
  // ---- Bedcovers ----
  { slug: "vovika-jacquard-bedcover", title: "Jacquard Woven Bedcover", category: "Bedcovers", image: img("1567016432779-094069958ea5", 1000), material: "Cotton Jacquard", sizes: "King / Queen", gsm: "220 GSM", moq: "500 Sets", badge: "Premium", desc: "Woven jacquard patterns – no print, texture that lasts decades." },
  { slug: "vovika-printed-bedcover", title: "Printed Quilted Bedcover", category: "Bedcovers", image: img("1528459801416-a9e53bbf4e17", 1000), material: "Cotton + Fill", sizes: "King / Queen", gsm: "180 GSM + Fill", moq: "500 Sets", desc: "Quilted printed bedcovers with diamond stitching and piped edges." },
  { slug: "vovika-patchwork-bedcover", title: "Patchwork Bedcover", category: "Bedcovers", image: img("1523381210434-271e8be1f52b", 1000), material: "Cotton Patchwork", sizes: "Queen / King", gsm: "200 GSM", moq: "500 Sets", desc: "Hand-look patchwork panels – a handicraft story for global retail." },
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
  { name: "James Carter", role: "Procurement Head, Hotel Group – USA", text: "APPLA's 400TC sheets survived 200+ commercial washes with zero pilling. Our guest satisfaction scores on bedding jumped 31%.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
  { name: "Sophie Müller", role: "Founder, Home Retail – Germany", text: "Flawless OEM execution. Custom sizes, German labelling, on-time Hamburg delivery. Our returns dropped to under 1%.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
  { name: "Ahmed Al Farsi", role: "Importer, Dubai – UAE", text: "Breathable protectors built for Gulf heat. Packaging, barcodes, documentation – everything export-ready. True professionals.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
  { name: "Emily Thompson", role: "Buyer, Boutique Stores – UK", text: "The reversible comforters are our best-seller three seasons running. Luxury hand-feel at a landed cost that works.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" },
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
  { src: img("1522771739844-6a9f6d5f14af", 900), cat: "Bedsheets", title: "Sateen Dobby Bed" },
  { src: img("1505693416388-ac5ce068fe85", 900), cat: "Bedsheets", title: "Signature White Set" },
  { src: img("1582719478250-c89cae4dc85b", 900), cat: "Comforters", title: "Grand Comforter" },
  { src: img("1567016432779-094069958ea5", 900), cat: "Comforters", title: "Winter Loft" },
  { src: img("1631049307264-da0ec9d70304", 900), cat: "Protectors", title: "AquaShield Layer" },
  { src: img("1540518614846-7eded433c457", 900), cat: "Bedsheets", title: "Quilt Cover Styling" },
  { src: img("1558769132-cb1aea458c5e", 900), cat: "Factory", title: "Fabric Library" },
  { src: img("1605518216938-7c31b7b14ad0", 900), cat: "Factory", title: "Precision Stitching" },
  { src: img("1528459801416-a9e53bbf4e17", 900), cat: "Factory", title: "Reactive Dyeing" },
  { src: img("1578575437130-527eed3abbec", 900), cat: "Packaging", title: "Export Cartons" },
  { src: img("1494412574643-ff11b0a5c1c3", 900), cat: "Export Containers", title: "Container Yard" },
  { src: img("1590490360182-c33d57733427", 900), cat: "Bedsheets", title: "Hotel Suite Bed" },
];
