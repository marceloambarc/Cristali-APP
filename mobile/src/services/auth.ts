interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response>{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '812981j2k3n102j31n2301n2301nj2jn3',
        user: {
          name: 'Hábil Informática',
          email: 'contato@habilinformatica.com.br' 
        },
      });
    },2000);
  });
}