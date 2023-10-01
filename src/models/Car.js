import { Schema, model } from "mongoose";

const CarSchema = new Schema({
    destaque: Boolean,
    ofertas: Boolean,
    tipoveiculo: String,
    zerokm: Boolean,
    placa: String,
    marca: String,
    modelo: String,
    versao: String,
    tipomotor: String,
    anofabricacao: Number,
    anomodelo: Number,
    cambio: String,
    km: Number,
    portas: Number,
    cor: String,
    combustivel: String,
    carroceria: String,
    preco: String,
    observacao: [{
        type: String,
    }],
    cadastro: String,
    alteracao: String,
    opcionais: [{
        type: String,
    }],
    acessorios:[{
        type: String,
    }],
    fotos:[{
        type: String,
    }],     
    // urlvideo: String,
    // loja: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Loja',
    //     //aqui será constuida a loja em Models
    // }]

}, 
{
    toJSON: {
        virtuals: true,
    }
}
);

CarSchema.virtual('fotos_url').get(function(){
    const baseUrl = 'http://localhost:3333/files/';
    return this.fotos.map(foto => baseUrl + foto);
});


export default model('Cars', CarSchema);