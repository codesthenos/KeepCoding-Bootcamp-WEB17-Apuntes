/**
 * @typedef {Object} Discount
 * @property {Product} product - The product the discount is applied to.
 * @property {number} discount - The discount percentage applied to the product.
 * @typedef {Object} Product
 * @property {string} name
 * @property {number} price
 * @property {number} quantity
 */
const cart = () => {
  // products = [{ name: 'T-shirt', price: 20, quantity: 2 }, { name: 'Cap', price: 5, quantity: 3 }];
  /**
   * Array of product objects in the cart.
   * @type {Product[]}
   */
  let products = [];
  // discounts = [{ product: { name: 'T-shirt', price: 20, quantity: 2 }, discount: 10 }];
  /**
   * Array of discount objects applied to products.
   * @type {Discount[]}
   */
  let discounts = [];
  
  /**
   * Adds a product to the cart.
   * @param {Product} product - The product to add to the cart.
   */
  const addToCart = (product) => {
    // products.push(product)
    products = [...products, product]
  };

  /**
   * Gets the list of products in the cart.
   * @returns {Product[]} The list of products in the cart.
   */
  const getCart = () => {
    return products
  };

  /**
   * Gets the list of discounts applied to the cart.
   * @returns {Discount[]} The list of discounts applied to the cart.
   */
  const getDiscounts = () => {
    return discounts
  };

  /**
   * Get the total price of the products in the cart.
   * @returns {number} The total price of the products in the cart.
   */
  const getTotal = () => products.reduce((accumulator, product) =>
    accumulator + +product.price * +product.quantity
  , 0);

  /**
   * Applies a discount to a product in the cart.
   * @param {string} productName - The name of the product to apply the discount to.
   * @param {string} discount - The discount percentage to apply.
   * @throws {Error} If the product is not found in the cart.
   */
  const applyDiscount = (productName, discount) => {
    // buscamos si hay producto que haga match
    const productToDiscount = products.find(product => product.name === productName)
    // si no hay match, lanzamos error
    if (!productToDiscount) throw new Error('No match on product')
    // incluimos el descuento en la lista de descuentos
    discounts = [
      ...discounts,
      { 
        product: productToDiscount,
        discount: parseInt(discount)
      }
    ]
    // actualizamos la lista de productos con el descuento
    // creamos el producto con el descuento
    const discountedProduct = { ...productToDiscount, price: productToDiscount.price * discount / 100 }
    // actualizamos la lista de products borrando el producto a aplicar descuento, e incluyendo el producto con el decuento
    products = [
      // elimino el producto que tiene descuento sin actualizar
      ...products.filter(product => product.name !== productName),
      // incluyo el producto con el descuento aplicado
      discountedProduct
    ]
  };
// Forma de Kevin
  const applyDiscountKevin = (productName, discount) => {
    const product = products.find(product => product.name === productName)

    if (!product) throw new Error('No product match')
    
    discounts = [
      ...discounts,
      {
        discount: parseInt(discount),
        product
      }
    ]

    products = products.map(productItem => {
      if (product.name === productName) {
        const discountNumber = parseInt(discount)
        const priceDiscount = productItem.price * (discountNumber / 100)
        const price = productItem.price - priceDiscount
        return {
          ...productItem,
          price
        }
      }
      return productItem
    })
  }

  /**
   * Removes a product from the cart and any discounts associated with it.
   * @param {string} productName - The name of the product to remove.
   */
  const removeProduct = (productName) => {
    products = products.filter(product => productName !== product.name)
    discounts = discounts.filter(discount => discount.product.name !== productName)
  };

  /**
   * Removes a discount applied to a product in the cart.
   * @param {string} productName - The name of the product to remove the discount from.
   */
  const removeDiscount = (productName) => {
    // encontramos el producto al que quitar el descuento
    const productToUpdate = products.find(product => product.name === productName)
    // encontramos el descuento aplicado al producto
    const discount = discounts.find(discount => discount.product.name === productName).discount
    // creamos producto con precio actualizado
    const updatedProduct = { ...productToUpdate, price: productToUpdate.price * 100 / discount }
    // actualizamos la lista de productos quitando el descuento al producto indicado
    products = [
      ...products.filter(product => product.name !== productName),
      updatedProduct
    ]
    // eliminamos el discount de la lista de discounts
    discounts = discounts.filter(discount => discount.product.name !== productName)
  };
// Forma Kevin removeDiscount
  const removeDiscountKevin = (productName) => {
    // buscamos el descuento a borrar
    const removedDiscount = discounts.find(discount => discount.product.name === productName)
    // borramos el descuento
    discounts = discounts.filter(discount => discount.product.name !== productName)
    // cambiar producto que tenia descuento
    products = products.map(product => {
      if (removedDiscount.product.name === product.name) {
        return {
          ...product,
          price: removedDiscount.product.price
        }
      }
      return product
    })

  }

  return { addToCart, getCart, applyDiscount, getDiscounts, removeDiscount, removeProduct, getTotal };
};

export default cart;