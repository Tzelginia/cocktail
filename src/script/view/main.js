import "../component/cocktail-list.js";
import "../component/search-bar.js";
import "../component/app-bar.js";
import Data from "../data/data.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const cocktailListElement = document.querySelector("cocktail-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await Data.searchName(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    cocktailListElement.cocktail = results;
  };

  const fallbackResult = (message) => {
    cocktailListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
