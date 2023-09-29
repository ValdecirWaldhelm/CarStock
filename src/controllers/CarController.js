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
        const { tipoveiculo, zerokm, modelo, versao, opcionais } = req.body;

        if(filenames <= 0){
            return res.status(400).send( "Envie ao menos 1 foto, para cadastro do veículo!" )
        }

        const car = await Car.create({
            fotos: filenames,
            tipoveiculo,
            zerokm,
            modelo,
            versao,
            opcionais,

        })

        console.log(req.body);
        console.log(req.file);

        return res.json({
            car,
            message: "Veículo cadastrado com sucesso!"
        })

    }



}

export default new CarController();