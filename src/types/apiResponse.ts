export interface Employee {
  _id?: string;
  name: string;
  address: string;
  city: string;
  country: string;
  zipcode: string;
  email: string;
  phone: string;
}

type page = {
  total: number;
  nextOffset: number;
  previousOffset: number;
  limit: number;
};

export interface ListEmployeesResponse {
  data: Employee[];
  page: page;
}
