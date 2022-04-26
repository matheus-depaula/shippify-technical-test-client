import { ECompanyPlanType } from '../../entities/company.enum';
import { EEntityStatus } from '../../entities/entity-status.enum';
import { ExtendableDto } from '../extendable.dto';

export interface FindDriverByIdDto {
  id: number;
  company?: boolean;
  activeOnly?: boolean;
}

export interface ListDriversDto extends ExtendableDto {
  firstName?: string;
  lastName?: string;
  email?: string;
  status?: EEntityStatus;
  companyId?: number;
  companyCity?: number;
  companyStatus?: EEntityStatus;
  companyPlanType?: ECompanyPlanType;
  activeOnly?: boolean;
}

export interface CreateDriverDto {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  companyId: number;
}

export interface UpdateDriverDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl: string;
}

export interface DisableDriverDto {
  id: number;
}
