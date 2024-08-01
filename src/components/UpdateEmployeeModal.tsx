import { SubmitHandler, useForm } from "react-hook-form";
import { Employee } from "../types/apiResponse";

interface Props {
  employee: Employee;
  onClose: () => void;
  onUpdate: (updatedEmployee: Employee) => void;
}

const UpdateEmployeeModal = ({ employee, onClose, onUpdate }: Props) => {
  const { register, handleSubmit } = useForm<Employee>({});
  const onSubmit: SubmitHandler<Employee> = async (data) => {
    const updatedEmployee = {
      ...data,
      _id : employee._id,
    };
    onUpdate(updatedEmployee);
  };

  const inputes = [
    {
      label: "Name" as const,
      type: "text" as const,
      name: "name" as const,
    },
    {
      label: "Email" as const,
      type: "email" as const,
      name: "email" as const,
    },
    {
      label: "Phone" as const,
      type: "text" as const,
      name: "phone" as const,
    },
    {
      label: "City" as const,
      type: "text" as const,
      name: "city" as const,
    },
    {
      label: "Zipcode" as const,
      type: "text" as const,
      name: "zipcode" as const,
    },
    {
      label: "Address" as const,
      type: "text" as const,
      name: "address" as const,
    },
    {
      label: "Country" as const,
      type: "text" as const,
      name: "country" as const,
    },
  ];
  return (
    <div className=" fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center pt-10  ">
      <div className="update-employee  rounded-md bg-white p-5 w-full max-w-[40rem]  ">
        <span
          className=" text-3xl font-semibold text-red-600 animate-bounce cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-lg font-medium">Update Employee</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2  "
        >
          {inputes.map((input, index) => (
            <div key={index} className=" flex flex-col gap-1">
              <label>{input.label}</label>
              <input
                className="border p-2 rounded-md"
                type={input.type}
                defaultValue={employee[input.name]}
                {...register(input.name, { required: true })}
              />
            </div>
          ))}

          <button
            className="border py-2 px-6 rounded-md bg-slate-200 hover:bg-slate-300 mt-auto "
            type="submit"
          >
            Update Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployeeModal;
