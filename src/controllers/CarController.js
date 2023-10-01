import Car from "../models/Car";

class CarController{
    async index(req, res){
        const cars = req.query;

        return res.json({
            message: "FUNCIONANDO GET CARS!"
        });
    };

    async store(req, res){
        const filenames = req.files.map((file) => file.filename);
        const { 
            destaque,
            ofertas,
            tipoveiculo, 
            zerokm, 
            placa,
            marca,
            modelo, 
            versao, 
            tipomotor,
            anofabricacao,
            anomodelo,
            cambio,
            km,
            portas, 
            cor,
            combustivel,
            carroceria,
            preco,
            observacao,
            cadastro,
            alteracao,
            acessorios,
            opcionais, 
            
        } = req.body;
        const opcionaisArray = opcionais.split('\n').filter(opcional => opcional.trim() !== '');
        const observacaoArray = observacao.split('\n').filter(observacoes => observacoes.trim() !== '');
        const acessoriosArray = acessorios.split('\n').filter(acessorio => acessorio.trim() !== '');

        if(filenames <= 0){
            return res.status(400).send( "Envie ao menos 1 foto, para cadastro do veículo!" )
        }

        const car = await Car.create({
            destaque,
            ofertas,
            tipoveiculo,
            zerokm,
            placa,
            marca,
            modelo,
            versao,
            tipomotor,
            anofabricacao,
            anomodelo,
            cambio,
            km,
            portas, 
            cor,
            combustivel,
            carroceria,
            preco,
            observacao: observacaoArray,
            cadastro,
            alteracao,
            opcionais: opcionaisArray,
            acessorios: acessoriosArray,
            fotos: filenames,

        })

        return res.json({
            car,
            message: "Veículo cadastrado com sucesso!"
        })

    }



}

export default new CarController();