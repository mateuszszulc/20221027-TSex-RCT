/**
 * @typedef { import("./CartItem").CartItem } CartItem
 * */

/*
 * tutaj celowo brakuje jednej "*" powyżej w komentarzu
 *
 * @typedef { import("./Clearable").Clearable } Clearable
 * @implements Clearable
 * */
export class ShoppingCart {
	/**
	 * @private
	 * @type {CartItem[]}
	 * */
	items = []

	addItem(item) {
		this.items.push(item)
	}

	/**
	 * @return {readonly CartItem[]}
	 */
	getAll() {
		return this.items
	}
}


// Testowanie implementacji:

const shoppingCart = new ShoppingCart()

shoppingCart.addItem({})
// Zobaczmy typechecking:
shoppingCart.items.push({})

shoppingCart.getAll().push({})
