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
    <div className="confirmation-modal">
      <div className="confirmation-modal-content">
        <p>{message}</p>
        <div className="confirmation-modal-actions">
          <button onClick={onConfirm} className="confirm-button">
            Yes
          </button>
          <button onClick={onCancel} className="cancel-button">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
