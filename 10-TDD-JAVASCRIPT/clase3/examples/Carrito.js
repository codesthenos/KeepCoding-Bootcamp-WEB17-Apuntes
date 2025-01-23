export class Carrito {
  
  items = []

  getTotalItems() {
    return this.items.length
  }

  getTotalCheckout() {
    return this.items.reduce((acc, item) => acc + item.price, 0)
  }

  checkItem(item) {
    if (typeof item !== 'object') {
      throw new Error('Item must be an object')
    }
    if (!item.price || !item.name) {
      throw new Error('Item must have price and name')
    }
  }

  addItem(item) {
    this.checkItem(item)
    this.items = [...this.items, item]
  }

  removeItem(item) {
    this.items = this.items.filter(i => i.name !== item.name)
  }
}