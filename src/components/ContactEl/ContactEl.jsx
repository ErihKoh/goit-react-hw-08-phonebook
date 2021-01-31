import PropTypes from 'prop-types';
import s from './ContactEl.module.css';

function ContactEl({ contact }) {
  return (
    <div>
      <span className={s.name}>{contact.data.name}: </span>
      <span className={s.number}>{contact.data.number}</span>
    </div>
  );
}

export default ContactEl;

ContactEl.propTypes = {
  contacts: PropTypes.object,
};
