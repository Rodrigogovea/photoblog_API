import { Table, Column,  Model, DataType } from 'sequelize-typescript'

@Table({
    tableName: 'packs'
})

class Packs extends Model {
    @Column({type:DataType.STRING(50)})
    title: String

    @Column({type: DataType.FLOAT(6,2)})
    price: Number

    @Column({type: DataType.INTEGER})
    photos: Number
}

export default Packs 