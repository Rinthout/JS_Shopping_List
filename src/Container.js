import React from "react"

import GroceryList from "./components/GroceryList"
import ShoppingCart from "./components/ShoppingCart"


class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: "apples" },
                { id: 2, title: "milk" },
                { id: 3, title: "cheese" },
                { id: 4, title: "bread" },
                { id: 5, title: "eggs" },
                { id: 6, title: "beer" }
            ],
            shoppingListItems: []
        }

        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.groceryItemToCart = this.groceryItemToCart.bind(this)
        this.addGroceryItem = this.addGroceryItem.bind(this)
        this.addAmount = this.addAmount.bind(this)
    }

    handleClickGroceryItem = (item) => {
         console.log(`Clicked ${item.title}`)
    }

    addAmount = (item, amount) => {
        this.setState({
          shoppingListItems: this.state.shoppingListItems.map((listItem) => {
            if (listItem.title === item.title) {
              return {
                id: listItem.id,
                title: listItem.title,
                amount: listItem.amount + amount,
              };
            }
            return listItem;
          }),
        });
      };

    groceryItemToCart = (item) => {
        console.log(`Add ${item.title} to cart`);
        if (
          this.state.shoppingListItems
            .map((item) => item.title)
            .includes(item.title)
        ) {
          this.addAmount(item, 1);
        } else {
          this.setState({
            shoppingListItems: [
              ...this.state.shoppingListItems,
              {
                id: item.id,
                title: item.title,
                amount: 1,
              },
            ],
          });
        }
      };

    emptyCart = (item) => {
        this.setState({
        shoppingListItems: [],
        });
    };
    
    addGroceryItem = (title) => {
        this.setState({
          groceryItems: [
            ...this.state.groceryItems,
            {
              id:
                this.state.groceryItems.length +
                this.state.shoppingListItems.length +
                1,
              title: title,
              amount: 1,
            },
          ],
        });
      };
      
    render() {
        return (
            <div>
                <h1>Grocery List</h1>
                <GroceryList
                    items={this.state.groceryItems}
                    onItemClick={this.groceryItemToCart}
                    onItemAdd={this.addGroceryItem}
                />
                <ShoppingCart
                    items={this.state.shoppingListItems}
                    onItemClick={this.handleClickGroceryItem}
                    onEmptyClick={this.emptyCart}
                />
            </div>
        )
    }
}

export default Container