import { Carrito } from './Carrito'

describe('Testing class carrito', () => {
  let carrito

  beforeEach(() => {
    carrito = new Carrito()
  })

  describe('Testeando getTotalItems y addItem', () => {

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

  describe('Testeando getTotalCheckout', () => {

    it('Carrito.getTotalCheckout debe devolver 10 despues de incluir un elemento en el carrito', () => {
      carrito.addItem({ name: 'sushi', price: 10 })
      expect(carrito.getTotalCheckout()).toBe(10)
    })

    it('Carrito.getTotalCheckout debe devolver 20 despues de incluir dos elementos en el carrito', () => {
      carrito.addItem({ name: 'sushi', price: 10 })
      carrito.addItem({ name: 'sushi', price: 10 })
      expect(carrito.getTotalCheckout()).toBe(20)
    })

    it('Carrito.getTotalCheckout debe devolver 11.5 despues de incluir un elemento en el carrito', () => {
      carrito.addItem({ name: 'sushi', price: 10 })
      carrito.addItem({ name: 'agua', price: 1.5 })
      expect(carrito.getTotalCheckout()).toBe(11.5)
    })

    it('Carrito.getTotalCheckout debe devolver 0 si el carrito esta vacio', () => {
      expect(carrito.getTotalCheckout()).toBe(0)
    })
  })

  describe('Testeando addItem', () => {

    it('Carrito.items debe contener el item agregado', () => {
      carrito.addItem({ name: 'sushi', price: 10 })
      expect(carrito.items).toBeArrayOfSize(1)
    })

    it('Carrito.items debe estar vacio si no se agrega ningun item', () => {
      expect(carrito.items).toEqual([])
    })

    it('Carrito.addItem debe verificar el item antes de agregarlo', () => {
      expect(() => carrito.checkItem('sushi')).toThrow('Item must be an object')
      expect(() => carrito.checkItem({ name: 'sushi' })).toThrow('Item must have price and name')

      const spy = jest.spyOn(carrito, 'checkItem') // mira a ver si checkItem se llama
      carrito.addItem({ name: 'sushi', price: 10 })

      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith({ name: 'sushi', price: 10 })
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe('Testeando removeItem', () => {
    const shusiItem = { name: 'sushi', price: 10 }
    const waterItem = { name: 'water', price: 1.5 }
    
    it('Carrito.removeItem debe remover el item del carrito', () => {
      carrito.addItem(shusiItem)
      carrito.removeItem(shusiItem)
      expect(carrito.items).toEqual([])
    })

    it('Carrito.removeItem debe devolver un array de 1 elemento despues de incluir 2 y borrar 1', () => {
      carrito.addItem(shusiItem)
      carrito.addItem(waterItem)
      carrito.addItem(shusiItem)
      expect(carrito.removeItem(shusiItem)).toBeArrayOfSize(2)
      expect(carrito.getTotalItems()).toBe(2)
    })
  })
})