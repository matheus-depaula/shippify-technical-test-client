import { BaseEntity } from './base.entity';
import { Driver } from './driver.entity';
import { EVehicleType } from './vehicle-type.enum';

export abstract class Vehicle extends BaseEntity {
  public plate!: string;
  public model!: string;
  public type!: EVehicleType;
  public capacity!: string;
  public driver?: Driver;
}
