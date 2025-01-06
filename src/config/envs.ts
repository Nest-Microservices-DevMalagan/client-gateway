import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars{
    //? Puerto del gateway
    PORT:number;    

    //! Producs microservices
    PRODUCTS_MICROSERVICES_HOST:string;
    PRODUCTS_MICROSERVICES_PORT:number;
    
    //! Orders microservices
    ORDERS_MICROSERVICES_HOST:string;
    ORDERS_MICROSERVICES_PORT:number;

}

const envsSchema = joi.object({
    //? Puerto del gateway
    PORT:joi.number().required(),

    //! Producs microservices
    PRODUCTS_MICROSERVICES_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICES_PORT: joi.number().required(),

    //! Orders microservices
    ORDERS_MICROSERVICES_HOST: joi.string().required(),
    ORDERS_MICROSERVICES_PORT: joi.number().required(),
})
.unknown()

const {error, value} = envsSchema.validate(process.env);

if(error) throw new Error(`Config validate error: ${error.message}`);

const envVars: EnvVars = value;


export const envs = {
     //? Puerto del gateway
    port: envVars.PORT,

    //! Producs microservices
    producsMicroserviceHost:envVars.PRODUCTS_MICROSERVICES_HOST,
    producsMicroservicePort:envVars.PRODUCTS_MICROSERVICES_PORT,

    //! Orders microservices
    ordersMicroserviceHost:envVars.ORDERS_MICROSERVICES_HOST,
    ordersMicroservicePort:envVars.ORDERS_MICROSERVICES_PORT,
};
