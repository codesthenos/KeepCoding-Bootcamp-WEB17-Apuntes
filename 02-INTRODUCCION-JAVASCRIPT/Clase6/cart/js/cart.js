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
  const getTotal = () => {};

  /**
   * Applies a discount to a product in the cart.
   * @param {string} productName - The name of the product to apply the discount to.
   * @param {string} discount - The discount percentage to apply.
   * @throws {Error} If the product is not found in the cart.
   */
  const applyDiscount = (productName, discount) => {};

  /**
   * Removes a product from the cart and any discounts associated with it.
   * @param {string} productName - The name of the product to remove.
   */
  const removeProduct = (productName) => {
    products = products.filter(product => productName !== product.name)
  };

  /**
   * Removes a discount applied to a product in the cart.
   * @param {string} productName - The name of the product to remove the discount from.
   */
  const removeDiscount = (productName) => {};

  return { addToCart, getCart, applyDiscount, getDiscounts, removeDiscount, removeProduct, getTotal };
};

export default cart;