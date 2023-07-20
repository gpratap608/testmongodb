
import mongoose,{Schema} from "mongoose";
import { number, string } from "prop-types";

const dataschema = new Schema({
    
        name: string,
        age:number,
        email:string
}, {timestamps : true})

const Data = mongoose.model.Data || mongoose.model("Data",dataschema)

export default Data