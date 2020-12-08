let Fornecedor=require('../model/fornecedor.model')
exports.teste=function(req, res){
    res.send('Funcionando')
};

exports.criar=function(req, res){
    let fornecedor=new Fornecedor({
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email
    });
    fornecedor.save(function(erro){
        if(erro) return next(erro);
        res.send('Cadastro Efetuado com Sucesso');
    });
};

exports.listar=function(req, res){
    Fornecedor.find({}, function(erro, resultado){
     if(erro) return next(erro);
     res.send(resultado);
    });
 };

 exports.listarUm=function(req, res){
    Fornecedor.findById(req.params.id, function(erro, resultado){
     if(erro) return next(erro);
     res.send(resultado);
    });
 };

 exports.deletar=function(req, res){
    Fornecedor.findByIdAndDelete(req.params.id, function(erro){
     if(erro) return next(erro);
     res.send('Removido com Sucesso');
    });
 };