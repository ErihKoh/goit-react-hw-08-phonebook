import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import PhonebookView from './view/PhonebookView';
import HomeView from './view/HomeView';
import RegisterView from './view/RegisterView';
import LoginView from './view/LoginView';
import Section from './components/Section';
import { authOperations } from './redux/auth';
import './App.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Section>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={PhonebookView} />
      </Switch>
    </Section>
  );
}
