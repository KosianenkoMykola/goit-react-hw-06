import "modern-normalize";
import css from "../App/App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { TiContacts } from "react-icons/ti";


export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook
        <TiContacts />
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
