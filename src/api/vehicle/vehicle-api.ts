import { Vehicle } from '../../entities/vehicle.entity';
import { httpServer } from '../../services/http-server/http-server.service';
import { API_BASE_URL } from '../../utils/api.utils';
import { IApiResponse } from '../response.interface';
import { CreateVehicleDto, DisableVehicleDto, FindVehicleByIdDto, ListVehiclesDto, UpdateVehicleDto } from './vehicle-api.dto';

export const vehicleApi = () => {
  async function findVehicleById(dto: FindVehicleByIdDto): Promise<IApiResponse<Vehicle>> {
    return await httpServer.execute<Vehicle>({
      method: 'GET',
      url: `${API_BASE_URL()}/vehicle/${dto.id}`,
      params: {
        activeOnly: dto.activeOnly,
      },
    });
  }

  async function listVehicles(dto?: ListVehiclesDto): Promise<IApiResponse<Vehicle[]>> {
    return await httpServer.execute<Vehicle[]>({
      method: 'GET',
      url: `${API_BASE_URL()}/vehicle`,
      params: { ...dto },
    });
  }

  async function createVehicle(dto: CreateVehicleDto): Promise<IApiResponse<void>> {
    return await httpServer.execute<void>({
      method: 'POST',
      url: `${API_BASE_URL()}/vehicle`,
      body: dto,
    });
  }

  async function updateVehicle(dto: UpdateVehicleDto): Promise<IApiResponse<void>> {
    return await httpServer.execute<void>({
      method: 'PUT',
      url: `${API_BASE_URL()}/vehicle/${dto.id}`,
      body: dto,
    });
  }

  async function disableVehicle(dto: DisableVehicleDto): Promise<IApiResponse<void>> {
    return await httpServer.execute<void>({
      method: 'DELETE',
      url: `${API_BASE_URL()}/vehicle/${dto.id}`,
    });
  }

  return { findVehicleById, listVehicles, createVehicle, updateVehicle, disableVehicle };
};
