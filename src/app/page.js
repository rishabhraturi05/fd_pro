import Navbar from "./components/Navbar";

const featuredRestaurants = [
  {
    name: "Spice Route",
    tagline: "Modern Indian Fusion",
    rating: 4.8,
    eta: "20-25 min",
    cuisines: ["Indian", "Fusion"],
    emoji: "🌶️",
  },
  {
    name: "Garden Bowl",
    tagline: "Fresh bowls & smoothies",
    rating: 4.7,
    eta: "15-20 min",
    cuisines: ["Healthy", "Vegan"],
    emoji: "🥗",
  },
  {
    name: "Midnight Slice",
    tagline: "Wood-fired pizzas",
    rating: 4.6,
    eta: "30-35 min",
    cuisines: ["Italian", "Comfort"],
    emoji: "🍕",
  },
];

const cuisineFilters = [
  "Indian",
  "Thai",
  "Italian",
  "Mexican",
  "Healthy",
  "Desserts",
];

const quickDeals = [
  { title: "Lunch Specials", detail: "Up to 30% off · 12-3 PM" },
  { title: "Free Delivery", detail: "On orders above $15" },
  { title: "Chef Curations", detail: "Hand-picked weekly menus" },
];

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <main className="page__content">
        <section className="hero">
          <div className="hero__content">
            <p className="eyebrow">Fresh food, faster deliveries</p>
            <h1>Discover the best food near you</h1>
            <p className="subtitle">
              Browse exclusive menus, explore neighborhood favorites, and get
              curated recommendations for every craving.
            </p>
            <div className="hero__search">
              <input
                type="text"
                placeholder="Search restaurants, dishes, or cuisines"
              />
              <button className="btn btn--primary">Find food</button>
            </div>
            <div className="chips">
              {cuisineFilters.map((cuisine) => (
                <button key={cuisine} className="chip">
                  {cuisine}
                </button>
              ))}
            </div>
          </div>
          <div className="hero__card">
            <h3>Today&apos;s highlights</h3>
            <ul>
              {quickDeals.map((deal) => (
                <li key={deal.title}>
                  <p>{deal.title}</p>
                  <span>{deal.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="restaurants" className="section">
          <div className="section__header">
            <div>
              <p className="eyebrow">Featured picks</p>
              <h2>Popular restaurants around you</h2>
            </div>
            <button className="btn btn--ghost">View all</button>
          </div>
          <div className="card-grid">
            {featuredRestaurants.map((restaurant) => (
              <article key={restaurant.name} className="restaurant-card">
                <div className="restaurant-card__emoji">
                  {restaurant.emoji}
                </div>
                <h3>{restaurant.name}</h3>
                <p className="restaurant-card__tagline">
                  {restaurant.tagline}
                </p>
                <div className="restaurant-card__meta">
                  <span>{restaurant.rating} ★</span>
                  <span>{restaurant.eta}</span>
                </div>
                <div className="chips">
                  {restaurant.cuisines.map((cuisine) => (
                    <span key={cuisine} className="chip chip--muted">
                      {cuisine}
                    </span>
                  ))}
                </div>
                <button className="btn btn--primary btn--block">
                  View menu
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="cuisines" className="section">
          <p className="eyebrow">Browse by food mood</p>
          <h2>Top cuisines</h2>
          <div className="cuisine-grid">
            {cuisineFilters.map((cuisine) => (
              <div key={cuisine} className="cuisine-card">
                <p>{cuisine}</p>
                <span>24 places</span>
              </div>
            ))}
          </div>
        </section>

        <section id="deals" className="section section--secondary">
          <div>
            <p className="eyebrow">For every craving</p>
            <h2>Plan your next meal</h2>
            <p className="subtitle">
              Schedule deliveries, save favorites, and earn rewards with every
              order.
            </p>
          </div>
          <div className="section__actions">
            <button className="btn btn--primary">Download the app</button>
            <button className="btn btn--ghost">Learn more</button>
          </div>
        </section>
      </main>
    </div>
  );
}