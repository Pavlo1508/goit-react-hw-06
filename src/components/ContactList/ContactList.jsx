import s from './ContactList.module.css'
import Contact from '../Contact/Contact'
import PropTypes from "prop-types";

const ContactList = ({ filteredContacts, onDelete }) => {
	
	return (
    <div className={s.wrapper}>
      <ul>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} {...contact} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList