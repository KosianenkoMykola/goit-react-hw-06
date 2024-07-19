import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from "../ContactList/ContactList.module.css"
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
  const { items } = useSelector(state => state.contacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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