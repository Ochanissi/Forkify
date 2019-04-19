import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

// Global state of the app
// State Object
// Current Recipe Object
// Shopping List Object
// Liked Recipes
const state = {};

const controlSearch = async () => {
    // 1. Get a query from view
    const query = searchView.getInput();
    // console.log(query);

    if (query) {
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare the UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
        // console.log(state.search.result);
    }
}

    elements.searchForum.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();

});

