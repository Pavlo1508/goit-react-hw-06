import s from "./ContactItem.module.css";
import PropTypes from "prop-types";
import { FaUser, FaPhone } from "react-icons/fa";

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.contact}>
        <div className={s.contact_data}>
          <div className={s.label}>
            <FaUser />
            <p>{name}</p>
          </div>
          <div className={s.label}>
            <FaPhone />
            <p>{number}</p>
          </div>
        </div>
        <button className={s.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};


ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired, 
  onDelete: PropTypes.func.isRequired,
};
export default ContactItem;
