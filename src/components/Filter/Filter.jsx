import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux';
import { getFilter } from '../../redux';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <div className={s.block}>
      <label className={s.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={s.input}
        id="filter"
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}

Filter.protoTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
