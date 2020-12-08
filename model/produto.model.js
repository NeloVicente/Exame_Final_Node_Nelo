const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let ProdutoSchema=new Schema({
    nome:{type:String,required:true},
    medida:{type:String,required:true},
    foto:{type:String,required:true}
});
module.exports=mongoose.model('Produto', ProdutoSchema);

