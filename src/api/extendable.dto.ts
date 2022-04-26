export interface ExtendableDto {
  take?: number;
  skip?: number;
  orderBy?: string;
  orderType?: 'DESC' | 'ASC';
}
