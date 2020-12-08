let Compra=require('../model/compra.model')
exports.teste=function(req, res){
    res.send('Funcionando')
};

exports.criar=function(req, res){
    let compra=new Compra({
        dataemissao: req.body.dataemissao,
        idproduto: req.body.idproduto,
        idfornecedor: req.body.idfornecedor,
        quantidade:req.body.quantidade,
        valorunitario:req.body.valorunitario,
        valortotal:req.body.quantidade*req.body.valorunitario
    });
    compra.save(function(erro){
        if(erro) return next(erro);
        res.send('Cadastro Efetuado com Sucesso');
    });
};

exports.alterar=function(req, res){
    Compra.findByIdAndUpdate(req.params.id, {$set:req.body,$set:{valortotal:req.body.valorunitario*req.body.quantidade}}, function(erro){
        if(erro) return next(erro);
        res.send('Alteração Efetuada com Sucesso');
    })
};

exports.listar=function(req, res){
   Compra.find({}, function(erro, resultado){
    if(erro) return next(erro);
    res.send(resultado);
   });
};

exports.listarUm=function(req, res){
    Compra.findById(req.params.id, function(erro, resultado){
     if(erro) return next(erro);
     res.send(resultado);
    });
 };

 exports.deletar=function(req, res){
    Compra.findByIdAndDelete(req.params.id, function(erro){
     if(erro) return next(erro);
     res.send('Removido com Sucesso');
    });
 };