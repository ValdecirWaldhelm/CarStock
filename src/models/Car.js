import { Schema, model } from "mongoose";

const CarSchema = new Schema({
    tipoveiculo: String,
    zerokm: Boolean,
    modelo: String,
    versao: String,
    opcionais: [{
        type: String
    }],
    fotos:[{
        type: String
    }],     

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