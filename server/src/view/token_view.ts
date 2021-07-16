  
import Token from '../models/Token';

export default {
  render(token: Token) {
    return {
      id: token.id,
      token: token.token,
      createAt: token.createAt,
      updateAt: token.updateAt
    };
  },

  renderMany(token: Token[]) {
    return token.map(token => this.render(token));
  }
}