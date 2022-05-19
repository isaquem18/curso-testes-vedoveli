import Cart from "./Cart";


describe("check the Cart class operations", () => {
  let cart;
  let product = {
    title: "Adidas runnign shoes - men",
    price: 35388,
  };

  let product2 = {
    title: "Adidas runnign shoes - women",
    price: 41872,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  describe("getTotal()", () => {
    it("should return 0 when getTotal() is executed in a newly created instance", () => {
      const cart = new Cart();

      expect(cart.getTotal()).toBe(0);
    });

    it("should multiply quantity and price and receive the total amount", () => {
      const item = {
        product,
        quantity: 2,
      };

      cart.add(item);

      expect(cart.getTotal()).toBe(70776);
    });

    it("should ensure no more than one product exists at a time", () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product,
        quantity: 1,
      });

      expect(cart.getTotal()).toEqual(35388);
    });

    it("should update total when a product gets included an then removed", () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });

      cart.remove(product);

      expect(cart.getTotal()).toBe(41872);
    });
  });

  describe("checkout()", () => {
    it("should return an object with the total and the list of items", () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    it("should reset the cart object when checkout() is called", () => {
      cart.add({
        product,
        quantity: 3,
      });

      cart.checkout();
    });
  });

  describe("summary()", () => {
    it("should return the cart array with the added item", () => {
      cart.add({
        product,
        quantity: 2,
      });

      expect(cart.summary()).toMatchSnapshot();
    });
  });

  describe('special conditions', () => {

    it('should apply percentage discount above minimun is passed', () => {
      const condition = {
        percentage: 30,
        minimum: 2
      };

      cart.add({
        product,
        condition,
        quantity: 2
      });

      expect(cart.getTotal()).toBe(70776);
    });
  });
});
