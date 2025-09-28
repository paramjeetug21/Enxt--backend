import { Model, Column, Table, DataType } from 'sequelize-typescript';
import { UserRole } from '../enum/user.enum';

@Table({ tableName: 'traders', timestamps: false, paranoid: false })
export class User extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column(DataType.STRING)
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column(DataType.STRING)
  declare email: string;

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    allowNull: false,
  })
  declare role: UserRole;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare panNumber: string;

  @Column(DataType.STRING)
  declare photo?: string;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 100000,
  })
  declare deposite: number;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  declare invested: number;
}
