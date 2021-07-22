import Client from "../models/Client";

export default {
  render(client: Client) {
    return {
      id: client.id,
      nomefinalcli: client.nomefinalcli,
      phone: client.phone,
      email: client.email,
      notes: client.notes,
      orderId: client.orderId
    };
  },

  renderMany(clients: Client[]) {
    return clients.map(client => this.render(client));
  }
};