import { useState } from 'react'
import CategoryFilter from './components/CategoryFilter.jsx'
import RecipeCard from './components/RecipeCard.jsx'
import RecipeSpotlight from './components/RecipeSpotlight.jsx'

const recipes = [
  { id: 1, title: 'Lemon ricotta toast', category: 'Breakfast', time: '15 min', level: 'Easy', emoji: '🍋', color: 'lemon', description: 'Whipped ricotta, lemon zest, and a little honey on warm sourdough.' },
  { id: 2, title: 'Green goddess bowl', category: 'Lunch', time: '25 min', level: 'Easy', emoji: '🥑', color: 'green', description: 'A bright bowl of grains, crisp greens, avocado, and herby dressing.' },
  { id: 3, title: 'Tomato butter pasta', category: 'Dinner', time: '30 min', level: 'Medium', emoji: '🍅', color: 'tomato', description: 'A silky weeknight pasta with slow-simmered tomatoes and basil.' },
  { id: 4, title: 'Berry oat crumble', category: 'Dessert', time: '40 min', level: 'Easy', emoji: '🫐', color: 'berry', description: 'Juicy berries tucked under a crisp, buttery oat topping.' },
]
const categories = ['All recipes', 'Breakfast', 'Lunch', 'Dinner', 'Dessert']

function App() {
  const [category, setCategory] = useState('All recipes')
  const [search, setSearch] = useState('')
  const visibleRecipes = recipes.filter((recipe) => {
    const matchesCategory = category === 'All recipes' || recipe.category === category
    const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="recipe-page">
      <header className="recipe-nav"><a className="recipe-logo" href="#home">the<span>good</span>plate<span className="logo-dot">.</span></a><nav aria-label="Recipe navigation"><a href="#discover">Discover</a><a href="#recipes">Recipes</a><a href="#about">Our kitchen</a></nav><a className="nav-cta" href="#recipes">Find a recipe <span>↗</span></a></header>

      <section className="recipe-hero" id="home">
        <div className="hero-text"><p className="recipe-kicker"><span /> SIMPLE FOOD, MADE WITH JOY</p><h1>A little more<br /><em>goodness</em> on<br />your plate.</h1><p className="recipe-lede">Fresh ideas for everyday cooking. Find something lovely to make with what you have.</p><a className="browse-link" href="#recipes">Browse recipes <span>↓</span></a></div>
        <div className="hero-food" aria-label="Illustration of a sunny meal"><div className="food-sun" /><div className="food-plate"><span>🥗</span></div><div className="hero-note">made with<br />a little love <b>♡</b></div></div>
      </section>

      <section className="spotlight-wrap" id="discover"><RecipeSpotlight recipe={recipes[0]} /></section>

      <section className="recipes-section" id="recipes">
        <div className="recipes-heading"><div><p className="recipe-kicker">A COLLECTION FOR EVERY DAY</p><h2>Find your next favorite</h2></div><label className="search-box"><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search recipes" aria-label="Search recipes" /></label></div>
        <CategoryFilter categories={categories} selected={category} onSelect={setCategory} />
        <div className="recipe-grid">
          {visibleRecipes.length > 0 ? visibleRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />) : <p className="no-recipes">No recipes match that search. Try another dish or category.</p>}
        </div>
      </section>

      <footer className="recipe-footer" id="about"><a className="recipe-logo" href="#home">the<span>good</span>plate<span className="logo-dot">.</span></a><p>Cook something good. Share something lovely.</p><span>© 2026 The Good Plate</span></footer>
    </main>
  )
}

export default App
