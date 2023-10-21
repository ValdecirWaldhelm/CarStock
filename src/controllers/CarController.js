import Car from "../models/Car";

class CarController{
    
    // TODOS OS CARROS
    // async index(req, res){
    //     const cars = await Car.find();
    //     if (cars.length) {
    //         return res.json({
    //             cars,
    //             message: "Veículos encontrados!"
    //         });
    //     } else {
    //         return res.json({
    //             message: "Nenhum veículo encontrado!"
    //         });
    //     }
    // };

    // TODOS OS CARROS EM DESTAQUE
    // async index(req, res){
    //     const { destaque } = req.headers;
    //     const cars = await Car.find({ destaque });
    //     if (cars.length === 0) {
    //         return res.json({
    //             message: "Nenhum veículo encontrado!"
    //         });
    //     }else{
    //         return res.json({
    //             cars,
    //             message: "Veículos encontrados!"
    //         });
    //     }
    // };

    async index(req, res) {
        const { destaque, ofertas } = req.headers;
    
        if (destaque && ofertas) {
            // em destaque ou ofertas
            const cars = await Car.find({ destaque, ofertas });
            if (cars.length === 0) {
                return res.json({
                    message: "Nenhum veículo em Destaque ou Oferta encontrado!"
                });
    
            } else {
                return res.json({
                    cars,
                    message: "Veículos em destaque e oferta encontrados!"
                });
            }

        } else if (destaque) {
            // Listar carros em destaque
            const cars = await Car.find({ destaque });
            if (cars.length === 0) {
                return res.json({
                    message: "Nenhum veículo em destaque encontrado!"
                });
            } else {
                return res.json({
                    cars,
                    message: "Veículos em destaque encontrados!"
                });
            }

        } else if (ofertas) {
            // Listar carros em oferta
            const cars = await Car.find({ ofertas });
            if (cars.length === 0) {
                return res.json({
                    message: "Nenhum veículo em oferta encontrado!"
                });

            } else {
                return res.json({
                    cars,
                    message: "Veículos em oferta encontrados!"
                });

            }

        } else {
            const cars = await Car.find();
            if (cars.length === 0) {
                return res.json({
                    message: "Nenhum veículo encontrado!"
                });

            } else {
                return res.json({
                    cars,
                    message: "Veículos encontrados!"
                });

            }
        }
    }
    

    // CADASTRAR CARRO
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
        } else if(marca == '' && modelo == '' && preco == ''){
            return res.status(400).send( "Insira a marca e o modelo, para cadastro do veículo!" )
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