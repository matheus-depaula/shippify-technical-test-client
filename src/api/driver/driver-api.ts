import { Driver } from '../../entities/driver.entity';
import { httpServer } from '../../services/http-server/http-server.service';
import { API_BASE_URL } from '../../utils/api.utils';
import { IApiResponse } from '../response.interface';
import { CreateDriverDto, DisableDriverDto, FindDriverByIdDto, ListDriversDto, UpdateDriverDto } from './driver-api.dto';

export const driverApi = () => {
  async function findDriverById(dto: FindDriverByIdDto): Promise<IApiResponse<Driver>> {
    return await httpServer.execute<Driver>({
      method: 'GET',
      url: `${API_BASE_URL()}/driver/${dto.id}`,
      params: {
        activeOnly: dto.activeOnly,
      },
    });
  }

  async function listDrivers(dto?: ListDriversDto): Promise<IApiResponse<Driver[]>> {
    return await httpServer.execute<Driver[]>({
      method: 'GET',
      url: `${API_BASE_URL()}/driver`,
      params: { ...dto },
    });
  }

  async function createDriver(dto: CreateDriverDto): Promise<IApiResponse<void>> {
    return await httpServer.execute<void>({
      method: 'POST',
      url: `${API_BASE_URL()}/driver`,
      body: dto,
    });
  }

  async function updateDriver(dto: UpdateDriverDto): Promise<IApiResponse<void>> {
    return await httpServer.execute<void>({
      method: 'PUT',
      url: `${API_BASE_URL()}/driver/${dto.id}`,
      body: dto,
    });
  }

  async function disableDriver(dto: DisableDriverDto): Promise<IApiResponse<void>> {
    return await httpServer.execute<void>({
      method: 'DELETE',
      url: `${API_BASE_URL()}/driver/${dto.id}`,
    });
  }

  return { findDriverById, listDrivers, createDriver, updateDriver, disableDriver };
};
