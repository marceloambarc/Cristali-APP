import Client from "../models/Client";
import orderView from "./order_view";

export default {
  render(client: Client) {
    return {
      id: client.id,
      nomefinalcli: client.nomefinalcli,
      phone: client.phone,
      email: client.email,
      notes: client.notes,
      orders: orderView.renderMany(client.orders)
    };
  },

  renderMany(client: Client[]) {
    return client.map(client => this.render(client));
  }
};