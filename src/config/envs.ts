import 'dotenv/config';
import * as joi from 'joi';
import { string } from 'joi';

interface EnvVars{
    PORT:number;    
    PRODUCTS_MICROSERVICES_HOST:string;
    PRODUCTS_MICROSERVICES_PORT:number;
}

const envsSchema = joi.object({
    PORT:joi.number().required(),
    PRODUCTS_MICROSERVICES_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICES_PORT: joi.number().required(),
})
.unknown()

const {error, value} = envsSchema.validate(process.env);

if(error) throw new Error(`Config validate error: ${error.message}`);

const envVars: EnvVars = value;


export const envs = {
    port: envVars.PORT,
    producsMicroserviceHost:envVars.PRODUCTS_MICROSERVICES_HOST,
    producsMicroservicePort:envVars.PRODUCTS_MICROSERVICES_PORT,
};
