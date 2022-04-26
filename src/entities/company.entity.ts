import { BaseEntity } from './base.entity';
import { ECompanyPlanType } from './company.enum';
import { Driver } from './driver.entity';

export abstract class Company extends BaseEntity {
  public name!: string;
  public city!: string;
  public plan_type!: ECompanyPlanType;
  public drivers?: Driver[];
}
