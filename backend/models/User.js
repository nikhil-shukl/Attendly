import mongoose from 'mongoose'; import bcrypt from 'bcryptjs';
const schema = new mongoose.Schema({ name:{type:String,required:true,trim:true}, email:{type:String,required:true,unique:true,lowercase:true,trim:true}, password:{type:String,required:true,minlength:8,select:false}, role:{type:String,enum:['admin','faculty','student'],required:true}, active:{type:Boolean,default:true} },{timestamps:true});
schema.pre('save',async function(){if(this.isModified('password')) this.password=await bcrypt.hash(this.password,12)});
schema.methods.matchesPassword=function(password){return bcrypt.compare(password,this.password)};
export default mongoose.model('User',schema);
