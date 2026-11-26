# The Good Plate — React recipe finder

A searchable, filterable recipe page built with React. Reusable cards, category buttons, and a featured recipe make up the layout.

## Run it on your computer

1. Install [Node.js](https://nodejs.org/).
2. Open a terminal in this repository.
3. Run `npm install` once.
4. Run `npm run dev`, then open the local address shown in the terminal.
5. Press `Ctrl+C` to stop the server.

## Learn the project structure

- `src/App.jsx` holds recipe data and the search/category state.
- `src/components/RecipeCard.jsx` displays one recipe and has its own save button state.
- `src/components/CategoryFilter.jsx` reuses buttons for filtering.
- `src/components/RecipeSpotlight.jsx` presents the featured recipe.
- `src/theme.css` styles the responsive page.

Try typing into the search box, choosing a meal category, or saving a recipe. Change a recipe in the `recipes` array to practice passing props.

## Scripts

- `npm run dev` — start development.
- `npm run build` — create the production app in `dist/`.
- `npm run preview` — preview the production build.
