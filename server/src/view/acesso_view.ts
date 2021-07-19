import Acesso from '../models/Acesso';

export default {
  render(acesso: Acesso) {
    return {
      id: acesso.id,
      ativo: acesso.ativo,
      senha: acesso.senha,
      ccli: acesso.ccli,
      nomecli: acesso.nomecli,
      cgce: acesso.cgce
    };
  },

  renderMany(acesso: Acesso[]) {
    return acesso.map(acesso => this.render(acesso));
  }
}