function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="category-list" role="group" aria-label="Filter by meal type">
      {categories.map((category) => <button key={category} type="button" className={selected === category ? 'category-button active' : 'category-button'} onClick={() => onSelect(category)}>{category}</button>)}
    </div>
  )
}

export default CategoryFilter
