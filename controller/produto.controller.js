let Produto=require('../model/produto.model')
exports.teste=function(req, res){
    res.send('Funcionando')
};

exports.criar=function(req, res){
    let produto=new Produto({
        nome: req.body.nome,
        medida: req.body.medida,
        foto: req.body.foto
    });
    produto.save(function(erro){
        if(erro) return next(erro);
        res.send('Cadastro Efetuado com Sucesso');
    });
};

exports.alterar=function(req, res){
    Produto.findByIdAndUpdate(req.params.id, {$set:req.body}, function(erro){
        if(erro) return next(erro);
        res.send('Alteração Efetuada com Sucesso');
    })
};

exports.listar=function(req, res){
    Produto.find({}, function(erro, resultado){
     if(erro) return next(erro);
     res.send(resultado);
    });
 };

 exports.listarUm=function(req, res){
    Produto.findById(req.params.id, function(erro, resultado){
     if(erro) return next(erro);
     res.send(resultado);
    });
 };

 exports.deletar=function(req, res){
    Produto.findByIdAndDelete(req.params.id, function(erro){
     if(erro) return next(erro);
     res.send('Removido com Sucesso');
    });
 };