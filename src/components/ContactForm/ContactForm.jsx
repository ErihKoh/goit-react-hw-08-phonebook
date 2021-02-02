import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error, notice } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import { addContact } from '../../redux/phoneBook';
import { getContacts } from '../../redux/phoneBook';
import s from './ContactForm.module.css';

defaults.delay = 3000;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '') {
      reset();
      return error({
        title: 'Error',
        text: 'Please eneter name!',
      });
    }
    if (number === '') {
      reset();
      return error({
        title: 'Error',
        text: 'Please eneter number!',
      });
    }

    const findContact = contacts?.find(contact => contact.name === name);

    if (!findContact) {
      dispatch(addContact({ name, number }));
      reset();
      return;
    }

    if (findContact?.name === name) {
      reset();
      return notice({
        title: 'Notice',
        text: `${name} is already in contacts.`,
      });
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.name}>Name</label>
      <input
        className={s.inputName}
        type="text"
        name="name"
        value={name}
        autoComplete="off"
        onChange={e => setName(e.target.value)}
      />

      <label className={s.number}>Number</label>
      <input
        className={s.inputNumber}
        type="tel"
        name="number"
        value={number}
        autoComplete="off"
        onChange={e => setNumber(e.target.value)}
      />
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
