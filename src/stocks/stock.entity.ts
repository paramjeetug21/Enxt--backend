import { UUIDV4 } from 'sequelize';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { StockType } from './enum/stock.enum';
import { TransactionEntity } from 'src/transaction/entity/transaction.entity';

@Table({ tableName: 'stock' })
export class Stock extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  })
  declare id: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.ENUM(...Object.values(StockType)),
  })
  stockType: StockType;

  @Column({
    type: DataType.STRING,
  })
  details?: string;

  @HasMany(() => TransactionEntity)
  transactions: TransactionEntity[];
}
