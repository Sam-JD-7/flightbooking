import React from "react";
import '../styles/popup.css'
const Popup = ({ onSubmit, onCancel }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <label>
          Enter Number of Tickets
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Popup;
