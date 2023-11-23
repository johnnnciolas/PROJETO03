class Hero {
    constructor(nome, idade, tipo) {
      this.nome = "Enú";
      this.idade = 155; 
      this.tipo = "mago";
    }
  
    atacar() {
      let ataque = '';
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia"
          break
        case "guerreiro":
          ataque = "usou espada"
          break
        case "monge":
          ataque = "usou artes marciais"
          break
        case "ninja":
          ataque = "usou shuriken"
          break
        default:
          ataque = "atacou"
      } 
      console.log(this.tipo + ataque)
    }
  }