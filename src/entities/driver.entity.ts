import { BaseEntity } from './base.entity';
import { Company } from './company.entity';
import { Vehicle } from './vehicle.entity';

export abstract class Driver extends BaseEntity {
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public phone!: string;
  public avatar_url!: string;
  public company?: Company;
  public vehicles?: Vehicle[];
}
