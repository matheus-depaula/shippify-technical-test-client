import { Company } from '../../entities/company.entity';
import { httpServer } from '../../services/http-server/http-server.service';
import { API_BASE_URL } from '../../utils/api.utils';
import { IApiResponse } from '../response.interface';
import { CreateCompanyDto, DisableCompanyDto, FindCompanyByIdDto, ListCompaniesDto, UpdateCompanyDto } from './company-api.dto';

export const companyApi = () => {
  async function findCompanyById(dto: FindCompanyByIdDto): Promise<IApiResponse<Company>> {
    return await httpServer.execute<Company>({
      method: 'GET',
      url: `${API_BASE_URL()}/company/${dto.id}`,
      params: {
        activeOnly: dto.activeOnly,
      },
    });
  }

  async function listCompanies(dto?: ListCompaniesDto): Promise<IApiResponse<Company[]>> {
    return await httpServer.execute<Company[]>({
      method: 'GET',
      url: `${API_BASE_URL()}/company`,
      params: { ...dto },
    });
  }

  async function createCompany(dto: CreateCompanyDto): Promise<IApiResponse<void>> {
    return await httpServer.execute<void>({
      method: 'POST',
      url: `${API_BASE_URL()}/company`,
      body: dto,
    });
  }

  async function updateCompany(dto: UpdateCompanyDto): Promise<IApiResponse<void>> {
    return await httpServer.execute<void>({
      method: 'PUT',
      url: `${API_BASE_URL()}/company/${dto.id}`,
      body: dto,
    });
  }

  async function disableCompany(dto: DisableCompanyDto): Promise<IApiResponse<void>> {
    return await httpServer.execute<void>({
      method: 'DELETE',
      url: `${API_BASE_URL()}/company/${dto.id}`,
    });
  }

  return { findCompanyById, listCompanies, createCompany, updateCompany, disableCompany };
};
