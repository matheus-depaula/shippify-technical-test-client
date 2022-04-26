import { EEntityStatus } from './entity-status.enum';

export abstract class BaseEntity {
  public readonly id!: number;
  public readonly status!: EEntityStatus;
  public readonly creation_date!: Date;
}
