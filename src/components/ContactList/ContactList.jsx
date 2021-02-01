import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import ContactEl from '../ContactEl';
import IconBatton from '../IconButton';
import { deleteContact } from '../../redux/phoneBook';
import { getVisibleContacts } from '../../redux/phoneBook';
import { ReactComponent as DelIcon } from '../../icons/delete.svg';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(contact => (
          <li key={contact.id} className={s.item}>
            <ContactEl contact={contact} />
            <IconBatton
              onClick={() => onDeleteContact(contact.id)}
              aria-label="Add todo"
            >
              <DelIcon width="15" height="15" fill="#fff" />
            </IconBatton>
          </li>
        ))}
    </ul>
  );
}

ContactList.protoTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
