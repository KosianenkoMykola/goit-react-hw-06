import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/fetchContacts';
import Contact from '../Contact/Contact';
import css from "../ContactList/ContactList.module.css"
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.contacts);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map((contact) => 
        <li className={css.item} key={contact.id}> 
          <Contact data={contact} />
        </li> )}
    </ul>
    </div>
  );
}