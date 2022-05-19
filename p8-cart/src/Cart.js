import find from 'lodash/find';
import remove from 'lodash/remove';

export default class Cart {
  items = [];
  
  // calcular o total a ser pago considerando também condições de descontos
  getTotal() {
    return this.items.reduce((acc, item) => {

      if (item.condition?.percentage) {

        return acc += item.product.price * item.quantity;
      }

      return acc += item.product.price * item.quantity;
    }, 0);
  };

  add(item) {
    const itemToFind = { product: item.product };

    if (find(this.items, itemToFind)) {
      remove(this.items, itemToFind)
    };

    this.items.push(item);
  };

  remove(product) {
    remove(this.items, { product })
  };

  // retorna tudo que se tem no cart
  summary() {
    const total = this.getTotal();
    const items = this.items;

    return {
      total,
      items
    };
  };

  // retorna tudo que se tem E limpa o cart 
  checkout() {
   const { total, items } = this.summary();
 
    this.items = []

    return {
      total,
      items
    };
  };

}
