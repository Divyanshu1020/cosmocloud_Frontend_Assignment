interface Props {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal = (
  { message, 
    onConfirm, 
    onCancel 
  }: Props) => {
  return (
    <div className=" fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50">
      <div className="h-1/4 w-1/3 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-md flex flex-col items-center justify-between">
        <p className=" text-2xl font-semibold">{message}</p>
        <div className="flex flex-row gap-4 w-full">
          <button onClick={onConfirm} className="text-white text-xl font-medium w-full border py-2 rounded-lg bg-red-600 hover:bg-red-700">
            Yes
          </button>
          <button onClick={onCancel} className="text-white text-xl font-medium w-full border py-2 rounded-lg bg-green-500  hover:bg-green-600">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
