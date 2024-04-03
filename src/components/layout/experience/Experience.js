import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import styles from "./Experience.module.scss";
import cx from "classnames";

const Experience = () => {
  const experience = useContext(DataContext).experience;

  return (
    <>
      <div className='container profile' style={{ marginTop: '15rem' }} id='about'>

        <div className={styles.timeline_wrapper}>
          <div className={styles.timeline}>

            {
              experience.map((item, key) => {
                return (<div key={key} className={styles.event}>
                  <h2>{item.title}</h2>
                  <p>{item.from}</p>
                </div>)
              })
            }

          </div>
        </div>

      </div>
    </>
  )
}

export default Experience