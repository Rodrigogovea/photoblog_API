import { Table, Column,  Model, DataType } from 'sequelize-typescript'

@Table({
    tableName: 'packs'
})

class Packs extends Model {
    @Column({type:DataType.STRING(50)})
    title: string

    @Column({type: DataType.FLOAT(6,2)})
    price: number

    @Column({type: DataType.NUMBER})
    photos: number
}

export default Packs