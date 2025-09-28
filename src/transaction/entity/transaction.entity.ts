import { UUIDV4 } from 'sequelize';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Stock } from 'src/stocks/stock.entity';
import { User } from 'src/user/entity/user.entity';

@Table({ tableName: 'transaction' })
export class TransactionEntity extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  })
  declare id: string;

  @ForeignKey(() => Stock)
  @Column({
    type: DataType.STRING,
  })
  stock_id: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
  })
  user_id: string;
}
