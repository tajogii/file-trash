import { Module } from "@nestjs/common";
import { UserModule } from './modules/user/user.module';
import { dbmodule, envmodule } from "./default_modules";


@Module({
    controllers:[],
    providers:[],
    imports:[ envmodule,dbmodule, UserModule]
    
})
export class AppModule{}