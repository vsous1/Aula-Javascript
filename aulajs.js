class Computador{

    constructor(placa_mae, processador, memoria_RAM, Hd, placa_de_video, fonte, gabinete){
        this.asus = placa_mae
        this.amd = processador
        this.hyperx = memoria_RAM
        this.seagate = Hd
        this.radeon = placa_de_video
        this.corsair= fonte
        this.aero_cool = gabinete
    }

         montarPC(){

              if(this.asus == 1, this.amd == 1, this.hyperx == 2, this.seagate == 1, this.radeon ==1, this.corsair == 1, this.aero_cool == 1){

                 console.log("temos um pc!")

            }else{

            console.log("ta faltando peça irmao")
            }
        
        }

}  
    
    

const computador = new Computador(1, 1, 1, 2, 1, 1, 1)

computador.montarPC()