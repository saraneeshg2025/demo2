function RecipeSpotlight({ recipe }) {
  return (
    <article className="spotlight-card">
      <div className={`spotlight-visual ${recipe.color}`}><span aria-hidden="true">{recipe.emoji}</span><div className="spotlight-stamp">TODAY'S<br />PICK</div></div>
      <div className="spotlight-copy"><p className="recipe-kicker">A GOOD PLACE TO START</p><h2>{recipe.title}</h2><p>{recipe.description} Bright, creamy, and ready before your coffee gets cold.</p><div className="spotlight-facts"><span>◷ &nbsp;{recipe.time}</span><span>✦ &nbsp;{recipe.level}</span><span>♡ &nbsp;4 ingredients</span></div><a href="#recipes" className="spotlight-link">See the recipe <span>↗</span></a></div>
    </article>
  )
}

export default RecipeSpotlight
