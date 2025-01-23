import { Carrito } from './Carrito'

describe('Testing class carrito', () => {
  describe('Testeando getTotalItems y addItem', () => {
    let carrito
    beforeEach(() => {
      carrito = new Carrito()
    })

    it('Carrito.getTotalItems debe devolver 0 a la inicializacion', () => {
      expect(carrito.getTotalItems()).toBe(0)
    })

    it('Carrito.getTotalItems debe devolver 1 despues de incluir un elemento en el carrito', () => {
      carrito.addItem({ name: 'item1', price: 10 })
      expect(carrito.getTotalItems()).toBe(1)
    })

    it('Carrito.getTotalItems debe devolver 2 despues de incluir un elemento en el carrito dos veces', () => {
      carrito.addItem({ name: 'item1', price: 10 })
      carrito.addItem({ name: 'item1', price: 10 })
      expect(carrito.getTotalItems()).toBe(2)
    })
  
    // Errores
    it('Carrito.addItem debe devolver un error si se incluye un item sin precio', () => {
      expect(() => carrito.addItem({ name: 'item1' })).toThrow()
    })

    it('Carrito.addItem debe devolver un error si se incluye un item sin nombre', () => {
      expect(() => carrito.addItem({ price: 10 })).toThrow()
    })

    it('Carrito.addItem debe devolver un error diciendo "Item must be an object" si se incluye un item que no es un objeto', () => {
      expect(() => carrito.addItem('item1')).toThrow('Item must be an object')
    })

    it('Carrito.addItem debe devolver un error diciendo "Item must have price and name" si se incluye un item que no tiene precio ni nombre', () => {
      expect(() => carrito.addItem({})).toThrow('Item must have price and name')
    })
  })
  // TODO
  // Testing getTotalCheckout
  // 1. Should return 10 after adding 1 sushiItem
  // 2. Should return 20 after adding 2 sushiItem
  // 3. Should return 11.5 after adding 1 sushiItem and 1 waterItem
  // 4. Should return 0 if carrito is empty

  // Testing addItem (detail)
  // 1. Should contain the added item in the carrito.items array
  // 2. Should have an empty array in .items when no adding item
  // 3. Should check the item before add it

  // Testing removeItem (tiene 2 aproximaciones)
  // 1. Should return an empty array after adding 1 item and removing 1 item
  // 2. Should return an array of 1 item after adding 2 items and removing 1 item
})