import { ECompanyPlanType } from '../../entities/company.enum';
import { EEntityStatus } from '../../entities/entity-status.enum';
import { EVehicleType } from '../../entities/vehicle-type.enum';
import { ExtendableDto } from '../extendable.dto';

export interface FindVehicleByIdDto {
  id: number;
  driver?: boolean;
  company?: boolean;
  activeOnly?: boolean;
}

export interface ListVehiclesDto extends ExtendableDto {
  plate?: string;
  model?: string;
  type?: EVehicleType;
  capacity?: string;
  status?: EEntityStatus;
  driverId?: number;
  driverFirstName?: string;
  driverLastName?: string;
  companyId?: number;
  companyCity?: number;
  companyStatus?: EEntityStatus;
  companyPlanType?: ECompanyPlanType;
  activeOnly?: boolean;
}

export interface CreateVehicleDto {
  plate: string;
  model: string;
  type: EVehicleType;
  capacity: string;
  driverId: number;
}

export interface UpdateVehicleDto {
  id: number;
  plate?: string;
  model?: string;
  type?: EVehicleType;
  capacity?: string;
  driverId?: number;
}

export interface DisableVehicleDto {
  id: number;
}
