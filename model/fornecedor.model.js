const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let FornecedorSchema=new Schema({
    nome:{type:String,required:true},
    telefone:{type:String,required:true},
    email:{type:String,required:true}
});
module.exports=mongoose.model('Fornecedor', FornecedorSchema);
