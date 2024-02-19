import { Column, DataType, Table, Model  } from "sequelize-typescript";


interface UserCreateAttribute{
    login:string
    password:string
}

@Table({tableName:'users'})
export class UserModel extends Model<UserModel,UserCreateAttribute>{
    
    @Column({type:DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
    id:number
    
    @Column({type:DataType.STRING, unique:true, allowNull:false})
    login: string

    @Column({type:DataType.STRING, allowNull:false})
    password: string

}