import Order from '../models/Order';
import itemView from './item_view';
import clientView from './client_view';

export default {
  render(order: Order) {
    return {
      id: order.id,
      token: order.token,
      code: order.code,
      timestamp: order.timestamp,
      totalprice: order.totalprice,
      notes: order.notes,
      condition: order.conditon,
      finalcli: clientView.render(order.client),
      items: itemView.renderMany(order.items)
    };
  },

  renderMany(order: Order[]){
    return order.map(order => this.render(order));
  }
}