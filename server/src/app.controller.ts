import { Controller, Get,} from "@nestjs/common";
import { AppService } from "./app.service";


@Controller('/api')
export class AppController{

    constructor (private appService: AppService) {}

    @Get('/')
    getTest() {
        return this.appService.getTest()
    }
}