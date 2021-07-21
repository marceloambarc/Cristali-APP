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

  renderMany(tokens: Token[]) {
    return tokens.map(token => this.render(token));
  }
}