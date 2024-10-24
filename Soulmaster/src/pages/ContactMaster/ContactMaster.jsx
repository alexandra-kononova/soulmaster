export default function Form() {
  return (
    <>
      <div className="">
        <h1>Book a session</h1>
        <h3>
          Please leave your details below and a master will be in touch with
          you.
        </h3>
      </div>
      <form>
        <label className="">
          Name
          <input
            classname="upload__input"
            type="text"
            placeholder="Add a title to your video"
            value={title}
            onChange={handleChangeTitle}
            required
          />
        </label>
        <label className="">
          Email
          <input
            classname="upload__input"
            type="text"
            placeholder="Add a title to your video"
            value={title}
            onChange={handleChangeTitle}
            required
          />
        </label>
        <label className="">
          Phone
          <input
            classname="upload__input"
            type="text"
            placeholder="Add a title to your video"
            value={title}
            onChange={handleChangeTitle}
            required
          />
        </label>
        <div className="button__container">
          <button
            onClick={handleUpload}
            className="button publish__button"
            type="submit"
          >
            <img className="publish__icon" src={publish} alt="publish icon" />
            publish
          </button>
          <Link to="/" className="cancel__link">
            <div className="cancel">cancel</div>
          </Link>
        </div>
      </form>
    </>
  );
}
