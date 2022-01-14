import { FilteredList, CardContact, ButtonDelete } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <FilteredList>
      {contacts.map(({ id, name, number }) => (
        <CardContact key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <ButtonDelete onClick={() => onDelete(id)}>Delete</ButtonDelete>
        </CardContact>
      ))}
    </FilteredList>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default ContactList;
