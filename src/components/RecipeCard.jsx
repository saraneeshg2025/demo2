import { useState } from 'react'

function RecipeCard({ recipe }) {
  const [saved, setSaved] = useState(false)

  return (
    <article className="recipe-card">
      <div className={`recipe-art ${recipe.color}`}><span className="food-emoji" aria-hidden="true">{recipe.emoji}</span><button type="button" className={saved ? 'save-button saved' : 'save-button'} aria-label={saved ? `Remove ${recipe.title} from saved recipes` : `Save ${recipe.title}`} aria-pressed={saved} onClick={() => setSaved((value) => !value)}>{saved ? '♥' : '♡'}</button></div>
      <div className="recipe-card-copy"><div className="recipe-meta"><span>{recipe.category}</span><span>{recipe.time}</span></div><h3>{recipe.title}</h3><p>{recipe.description}</p></div>
    </article>
  )
}

export default RecipeCard
