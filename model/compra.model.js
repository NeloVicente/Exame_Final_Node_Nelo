const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let CompraSchema=new Schema({
    dataemissao:{type:String,required:true},
    idproduto:{type:String,required:true},
    idfornecedor:{type:String,required:true},
    quantidade:{type:Number,required:true},
    valorunitario:{type:Number,required:true},
    valortotal:{type:Number, required:true}
});
module.exports=mongoose.model('Compra', CompraSchema);
