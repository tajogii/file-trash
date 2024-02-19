import { Body, Controller, Delete, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Post()
    create(@Body() userDto:CreateUserDto){
        return this.userService.createUser(userDto)
    }


}
