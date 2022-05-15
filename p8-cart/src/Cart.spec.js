import Cart from './Cart';

describe('check the Cart class operations', () => {
  let cart;
  let product = {
    title: 'Adidas runnign shoes - men',
    price: 35388
  };

  beforeEach(() => {
    cart = new Cart();
  });  

  it('should return 0 when getTotal() is executed in a newly created instance', () => {
    const cart = new Cart();

    expect(cart.getTotal()).toBe(0);
  });

  it('should multiply quantity and price and receive the total amount', () => {

    const item = {
      product,
      quantity: 2
    };

    cart.add(item);

    expect(cart.getTotal()).toBe(70776);

  });

  it('should ensure no more than one product exists at a time', () => {
    cart.add({
      product,
      quantity: 2
    });

    cart.add({
      product,
      quantity: 1
    })

    expect(cart.getTotal()).toEqual(70776);
  })


});