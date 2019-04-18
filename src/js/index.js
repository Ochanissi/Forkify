import Search from './models/Search';

// Global state of the app
// State Object
// Current Recipe Object
// Shopping List Object
// Liked Recipes
const state = {};

const controlSearch = async () => {
    // 1. Get a query from view
    const query = 'pizza'; // TODO

    if (query) {
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare the UI for results

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        console.log(state.search.result);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();

});

