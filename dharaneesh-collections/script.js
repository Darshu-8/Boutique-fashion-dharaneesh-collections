/* Dharaneesh Collections - easy-edit settings */
const CONFIG = {
  whatsappNumber: "919677421499",                 // country code + number, no + or spaces
  instagramUrl: "https://www.instagram.com/dharaneesh_collections_/"
};

/* Edit products here. Prices are SAMPLE prices until the real catalogue is added. */
const IMG = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=75`;
const PRODUCTS = [
  { name: "The Gulmohar Edit", category: "Ethnic Wear", price: "₹1,499", badge: "Bestseller",
    description: "A graceful traditional-inspired look for special occasions.",
    image: IMG("photo-1583391733956-3750e0ff4e8b"), alt: "Model in a traditional-inspired outfit, sample photograph" },
  { name: "Everyday Bloom", category: "Everyday Styles", price: "₹899", badge: "Easy Elegance",
    description: "An effortless, comfortable style for everyday wear.",
    image: IMG("photo-1469334031218-e382a71b716b"), alt: "Woman in a relaxed floral everyday outfit, sample photograph" },
  { name: "Rose Gold Evening", category: "Festive Looks", price: "₹1,899", badge: "Occasion Edit",
    description: "A polished outfit inspiration for celebrations and evening events.",
    image: IMG("photo-1595777457583-95e059d581b8"), alt: "Woman in an elegant evening dress, sample photograph" },
  { name: "The Classic Muse", category: "Featured Designs", price: "₹1,299", badge: "Curated Pick",
    description: "A versatile statement style with timeless appeal.",
    image: IMG("photo-1515886657613-9f3515b0c78f"), alt: "Woman in a classic statement outfit, sample photograph" },
  { name: "Festive Petals", category: "Festive Looks", price: "₹2,199", badge: "Festive Favourite",
    description: "A celebration-inspired design for memorable occasions.",
    image: IMG("photo-1610030469983-98e550d6193c"), alt: "Woman in a festive celebration outfit, sample photograph" },
  { name: "Soft Sunday", category: "Everyday Styles", price: "₹799", badge: "Everyday Love",
    description: "An easy-going style for relaxed days and casual outings.",
    image: IMG("photo-1539109136881-3be0616acf4b"), alt: "Woman in a soft casual outfit, sample photograph" }
];

const CATEGORIES = ["All Styles", "Ethnic Wear", "Everyday Styles", "Festive Looks", "Featured Designs"];

const grid = document.getElementById("productGrid");
const filters = document.getElementById("filters");
const status = document.getElementById("status");

function whatsappLink(productName) {
  const text = `Hi Dharaneesh Collections, I'm interested in ${productName}. Please share the available designs, sizes, colours, and current price.`;
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/* If a photo fails to load, show a plum/rose tile with the product name instead */
function addImageFallback(img, wrapper, name) {
  const fail = () => { img.hidden = true; wrapper.classList.add("no-img"); wrapper.dataset.name = name; };
  img.addEventListener("error", fail);
  if (img.complete && img.naturalWidth === 0) fail();
}

function renderProducts(category) {
  const list = category === "All Styles" ? PRODUCTS : PRODUCTS.filter(p => p.category === category);
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-img">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
        <img src="${p.image}" alt="${p.alt}" loading="lazy" width="700" height="875">
      </div>
      <div class="card-body">
        <span class="cat">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p class="price">${p.price}<small>Sample price</small></p>
        <a class="btn btn-primary" href="${whatsappLink(p.name)}" target="_blank" rel="noopener noreferrer" aria-label="Enquire on WhatsApp about ${p.name}">Enquire on WhatsApp</a>
      </div>`;
    const wrap = card.querySelector(".card-img");
    addImageFallback(wrap.querySelector("img"), wrap, p.name);
    grid.appendChild(card);
  });
  status.textContent = `Showing ${list.length} ${list.length === 1 ? "style" : "styles"} in ${category}.`;
}

/* Category buttons */
CATEGORIES.forEach((cat, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "filter";
  b.textContent = cat;
  b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
  b.addEventListener("click", () => {
    filters.querySelectorAll(".filter").forEach(x => x.setAttribute("aria-pressed", "false"));
    b.setAttribute("aria-pressed", "true");
    renderProducts(cat);
  });
  filters.appendChild(b);
});
renderProducts("All Styles");

/* Instagram sample gallery (sample photographs, links to the profile) */
const insta = document.getElementById("instaGrid");
PRODUCTS.slice(0, 4).forEach(p => {
  const a = document.createElement("a");
  a.href = CONFIG.instagramUrl; a.target = "_blank"; a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", "Open Dharaneesh Collections on Instagram");
  a.innerHTML = `<img src="${p.image}" alt="Sample fashion photograph" loading="lazy">`;
  a.querySelector("img").addEventListener("error", e => { e.target.hidden = true; });
  insta.appendChild(a);
});

/* Mobile menu */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

document.getElementById("year").textContent = new Date().getFullYear();
