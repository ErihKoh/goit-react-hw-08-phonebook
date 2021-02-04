import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/phoneBook';
import { useEffect } from 'react';
import { bounceInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import s from './PhonebookView.module.css';

const style = {
  bounceInLeft: {
    animation: 'x 3s',
    animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft'),
  },
};

export default function PhonebookView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyleRoot>
      <div className={s.block} style={style.bounceInLeft}>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </div>
    </StyleRoot>
  );
}
