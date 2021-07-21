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

  renderMany(items: Item[]){
    return items.map(item => this.render(item));
  }
}