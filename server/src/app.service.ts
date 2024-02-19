import { Injectable } from "@nestjs/common";


@Injectable()
export class AppService{

    getTest() {
        return [{id:"123",name:"Ivan"}]
    }

}