import css from '../Contact/Contact.module.css'
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export default function Contact({ data: { id, name, number }, onDelete}) {
    return (
      <>
        <div className={css.title}>
          <p className={css.userName}>
            <FaUser className={css.icon} />
            {name}
          </p>
          <p>
            <FaPhoneAlt className={css.icon} />
            {number}
          </p>
        </div>
        <button className={css.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </>
    );
}