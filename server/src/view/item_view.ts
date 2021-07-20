import Item from '../models/Item';

export default {
  render(item: Item) {
    return {
      id: item.id,
      itemname: item.itemname,
      price: item.price,
      quantity: item.quantity
    };
  },

  renderMany(item: Item[]){
    return item.map(item => this.render(item));
  }
}