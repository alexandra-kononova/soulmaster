import Modal from "react-modal";
import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";
import "./FormModal.scss";
import { useEffect } from "react";

const FormModal = ({ isOpen, closeModal }) => {
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleClose = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Contact Modal"
      className="confirm"
      overlayClassName="confirm__overlay"
    >
      <button
        aria-label="Close"
        className="confirm__close-button"
        onClick={handleClose}
      >
        Close
      </button>
      <div className="confirm__description">
        <Typography level="h3">
          Thank you for providing your contact details.
        </Typography>
        <p></p>
        <p>Master will be in touch with you soon.</p>
      </div>
      <div className="confirm__wrapper">
        <Button
          onClick={handleClose}
          variant="contained"
          size="lg"
          className="confirm__button"
        >
          <Typography color="black">CLOSE</Typography>
        </Button>
      </div>
    </Modal>
  );
};

export default FormModal;
