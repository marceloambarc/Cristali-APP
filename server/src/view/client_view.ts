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

  renderMany(clients: Client[]) {
    return clients.map(client => this.render(client));
  }
};