import React from "react";
import styles from "./styles/Headbar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEnvelope,  } from "@fortawesome/free-regular-svg-icons";
import { faPhone  } from "@fortawesome/free-solid-svg-icons";



export default function Headbar() {


  return <div className={styles.mainBar}>
    <div className="styles.left_side">
      <ul className={styles.leftList}>
        <li>  
            <span><FontAwesomeIcon className={styles.icons} icon={faEnvelope} /></span>
            <span className={styles}>mrbayezidhoshen@gmail.com</span>
            
        </li>
        <li>
              <span><FontAwesomeIcon icon={faPhone} className={styles.icons}/></span>
              <span>+880-1728181464</span>
          </li>
      </ul>
    </div>
    <div className="style.right_side">

    </div>
  </div>;
}
