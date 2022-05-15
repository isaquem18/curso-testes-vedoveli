export default class Cart {
  items = [];
  
  // calcular o total a ser pago considerando também condições de descontos
  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc += item.quantity * item.product.price;
    }, 0);
  };

  add(item) {
    this.items.push(item);
  };

  remove(product) {};

  // retorna tudo que se tem no cart
  summary() {};

  // retorna tudo que se tem E limpa o cart 
  checkout() {};

}