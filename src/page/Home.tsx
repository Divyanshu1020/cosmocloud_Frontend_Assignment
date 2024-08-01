import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "../components/PopUpConfirmation";
import UpdateEmployeeModal from "../components/UpdateEmployeeModal";
import api from "../config/axios.config";
import { Employee, ListEmployeesResponse } from "../types/apiResponse";

export default function Home() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState<Employee | null>(
    null
  );
  const limit = 10;
  const offset = 0;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get<ListEmployeesResponse>(
          `employee?limit=${limit}&offset=${offset}`
        );
        setEmployees(response.data.data);
      } catch (error) {
        console.error("There was an error fetching the employees!", error);
        setEmployees([]);
      }
    };
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id: string | undefined) => {
    try {
      await api.delete(`employee/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (error: unknown) {
      console.error("There was an error deleting the employee!", error);
    }
  };

  const openUpdateModal = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const handleUpdate = async (updatedEmployee: Employee) => {
    try {
      const { _id, ...data } = updatedEmployee;
      await api.patch(`employee/${_id}`, data);
      setEmployees(
        employees.map((emp) => (emp._id === _id ? updatedEmployee : emp))
      );
      closeUpdateModal();
    } catch (error) {
      console.error("There was an error updating the employee!", error);
    }
  };

  const openConfirmationModal = (employee: Employee) => {
    setEmployeeToDelete(employee);
    setIsConfirmationOpen(true);
  };

  const closeConfirmationModal = () => {
    setEmployeeToDelete(null);
    setIsConfirmationOpen(false);
  };

  const handleConfirmDelete = () => {
    deleteEmployee(employeeToDelete?._id);
    closeConfirmationModal();
  };

  if (!Array.isArray(employees)) {
    return <p>Failed to load employees</p>;
  }
  return (
    <div className=" overflow-x-auto rounded-md p-5 shadow-[0_0_0_1px_#1717170d] bg-white">
      {employees.length === 0 ? (
        <p>No Employees in the system</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee._id}>
                <td>{index + 1}</td>
                <td>{employee._id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>
                  <Link to={`/details/${employee._id}`}>Details</Link>{" "}
                </td>
                <td>
                  <button onClick={() => openUpdateModal(employee)}>
                    Update
                  </button>{" "}
                  <button onClick={() => openConfirmationModal(employee)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isModalOpen && selectedEmployee && (
        <UpdateEmployeeModal
          employee={selectedEmployee}
          onClose={closeUpdateModal}
          onUpdate={handleUpdate}
        />
      )}
      {isConfirmationOpen && (
        <ConfirmationModal
          message="Are you sure you want to delete this employee?"
          onConfirm={handleConfirmDelete}
          onCancel={closeConfirmationModal}
        />
      )}
    </div>
  );
}
