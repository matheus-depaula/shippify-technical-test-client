import { ECompanyPlanType } from '../../entities/company.enum';
import { EEntityStatus } from '../../entities/entity-status.enum';
import { ExtendableDto } from '../extendable.dto';

export interface FindCompanyByIdDto {
  id: number;
  activeOnly?: boolean;
}

export interface ListCompaniesDto extends ExtendableDto {
  name?: string;
  city?: number;
  status?: EEntityStatus;
  planType?: ECompanyPlanType;
  activeOnly?: boolean;
}

export interface CreateCompanyDto {
  name: string;
  city: number;
  planType: ECompanyPlanType;
}

export interface UpdateCompanyDto {
  id: number;
  name?: string;
  city?: number;
  planType?: ECompanyPlanType;
}

export interface DisableCompanyDto {
  id: number;
}
