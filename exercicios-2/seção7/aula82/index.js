class DispositivoEltronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log(this.nome + 'já desligado');
            return;
        }
        this.ligado = false;

    }
}
// quando utilizar extends é necessario usar super( e o nome da variavel)
class Smartphone extends DispositivoEltronico{  
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

}
class Tablet extends DispositivoEltronico{  
    constructor(nome,temWifi){
        super(nome);
    
        this.temWifi = temWifi;
    }
    ligar(){
        console.log('Olha você alterou o médoto ligar.');
    }
    falaoi(){
        console.log('Oi');
    }
}
const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');

console.log(s1)
s1.ligar();
s1.ligar();

const t1 = new Tablet('Ipad', true);

console.log(t1)
t1.ligar();

