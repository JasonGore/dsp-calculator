import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item, Items, recipes } from './data/recipes';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import './App.css';

function App() {
  const [ item, setItem ] = React.useState<Item>("Interstellar logistics station");
  const [ quantity, setQuantity ] = React.useState<number>(1);

  const dropdownItems = Items.map(item => 
    <Dropdown.Item eventKey={item}>
      {item}
    </Dropdown.Item>
  );

  const onDropdown = (arg: any) => {
    setItem(arg);
    setQuantity(1);
  };

  const recipeContent = getRecipeContent(item, quantity, setItem, setQuantity);
  const displayContent = Number.isNaN(quantity) ? "Invalid quantity" : recipeContent;

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon">
              Quantity
            </span>
          </div>
          <input 
            type="number" 
            className="form-control" 
            placeholder="Quantity" 
            value={quantity} 
            onChange={(event)=> setQuantity(Number.parseInt(event.target.value))}
          />
        </div>
        <br/>
        <DropdownButton 
          id="dropdown-basic-button" 
          title={item}
          onSelect={onDropdown}
        >
          {dropdownItems}
        </DropdownButton>
        <br/>
        {displayContent}
      </header>
    </div>
  );
}

function getRecipeContent(
  item: Item, 
  quantity: number, 
  setItem: (item: Item) => void, 
  setQuantity: (quantity: number) => void) 
{
  const recipe = recipes[item];
  const recipeContent = recipe?.ingredients?.map(ingredient => {
    const nestedRecipe = getRecipeContent(ingredient.item, quantity * ingredient.quantity, setItem, setQuantity);
    // const nestedContent = nestedRecipe ? nestedRecipe : <ul><li>No Recipe</li></ul>;
    const nestedContent = nestedRecipe;
    const onClick = () => {
      setItem(ingredient.item);
      setQuantity(quantity * ingredient.quantity);
    }

    return (
      <ul>
        <li>
          {/* eslint-disable-next-line */}
          <a href="#" onClick={onClick}>
            {ingredient.item}: {(quantity * ingredient.quantity) / recipe.yields}
          </a>
          {nestedContent}
        </li>
      </ul>
    )
  });

  return recipeContent;
};

export default App;
