// import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../config/axios.config";
import { Employee } from "../types/apiResponse";

export default function AddEmp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>({});
  const onSubmit: SubmitHandler<Employee> = async (data) => {
    try {
      await api.post("/employee", data);
      // console.log(data);
    } catch (error) {
      console.error("There was an error adding the employee!", error);
    }
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
    <div className="p-5 bg-white rounded-md max-w-[40rem] mx-auto h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 h-full ">
        {inputes.map((input, index) => (
          <div key={index} className=" flex flex-col gap-1">
            <label>{input.label}</label>
            <input
              className="border p-2 rounded-md"
              type={input.type}
              {...register(input.name, { required: true })}
            />
            {errors[input.name] && <p>This field is required</p>}
          </div>
        ))}

        <button
          className="border py-2 px-6 rounded-md bg-slate-200 hover:bg-slate-300 mt-auto "
          type="submit"
        >
          Add Employee
        </button>
      </form>
    </div>

  );
}
