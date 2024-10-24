import "../ContactMaster/ContactMaster.scss";
import FormModal from "../../components/FormModal/FormModal";
import { useState } from "react";

export default function Form() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <>
      <div className="contact__header">
        <h1 className="contact__title">Book a session</h1>
        <h3 className="contact__subtitle">
          Please leave your details below and a master will be in touch with
          you.
        </h3>
      </div>
      <form className="contact__form" onSubmit={handleSubmit}>
        <label className="contact__field">
          Name
          <input
            className="contact__input"
            type="text"
            placeholder="Anna"
            required
          />
        </label>
        <label className="contact__field">
          Email
          <input
            className="contact__input"
            type="email"
            placeholder="example@site.com"
            required
          />
        </label>
        <label className="contact__field">
          Phone
          <input
            className="contact__input"
            type="tel"
            placeholder="+ 1 123 456 7890"
            required
          />
        </label>
        <div className="button__container">
          <button className="form__button" type="submit">
            Submit
          </button>
        </div>
      </form>
      {isOpen && <FormModal isOpen={isOpen} closeModal={closeModal} />}
    </>
  );
}
