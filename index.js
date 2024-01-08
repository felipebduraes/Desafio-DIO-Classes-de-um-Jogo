class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'Usou magia';
                break;
        

            case 'guerreiro':
                ataque = 'Usou espada';
                break;

            case 'monge':
                ataque = 'Usou artes marciais';
                break;

            case 'ninja':
                ataque = 'Usou shuriken';
                break;

        }

    
    
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}





