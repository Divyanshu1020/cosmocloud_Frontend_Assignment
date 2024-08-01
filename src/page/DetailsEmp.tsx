import { useEffect, useState } from "react";
// import { FaRegUser } from "react-icons/fa";
import { useParams } from "react-router-dom";
import api from "../config/axios.config";
import { Employee } from "../types/apiResponse";
const DetailsEmp = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await api.get<Employee>(`/employee/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error("There was an error fetching the employee!", error);
      }
    };
    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5 bg-white rounded-md max-w-[40rem] mx-auto h-full">
      <div className=" flex flex-col gap-4 h-full my-auto">
        <div className=" flex flex-col items-center justify-center gap-1">
          <h1 className="text-2xl font-normal">{employee.name}</h1>
        </div>
        <div className=" flex flex-col gap-4 h-full">
          <div className=" flex flex-row gap-1 items-center justify-between text-left">
            <h6 className=" text-lg font-medium">Employee ID</h6>
            <p className=" text-lg font-normal text-gray-600">{employee._id}</p>
          </div>

          <div className=" flex flex-row gap-1 items-center justify-between ">
            <h6 className=" text-lg font-medium">Email</h6>
            <p className=" text-lg font-normal text-gray-600">
              {employee.email}
            </p>
          </div>
          <div className=" flex flex-row gap-1 items-center justify-between">
            <h6 className=" text-lg font-medium">Phone Number</h6>
            <p className=" text-lg font-normal text-gray-600">
              {employee.phone}
            </p>
          </div>
          <div className=" flex flex-row gap-1 items-center justify-between">
            <h6 className=" text-lg font-medium">City</h6>
            <p className=" text-lg font-normal text-gray-600">
              {employee.city}
            </p>
          </div>
          <div className=" flex flex-row gap-1 items-center justify-between">
            <h6 className=" text-lg font-medium">Country</h6>
            <p className=" text-lg font-normal text-gray-600">
              {employee.country}
            </p>
          </div>
          <div className=" flex flex-row gap-1 items-center justify-between">
            <h6 className=" text-lg font-medium">Zipcode</h6>
            <p className=" text-lg font-normal text-gray-600">
              {employee.zipcode}
            </p>
          </div>
          <div className=" flex flex-row gap-1 items-center justify-between">
            <h6 className=" text-lg font-medium">Address</h6>
            <p className=" text-lg font-normal text-gray-600">
              {employee.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsEmp;
