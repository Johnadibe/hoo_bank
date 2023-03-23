import React from 'react';
import { clients } from '../constants';
import styles from '../style';


const Clients = () =>  (
    <section className={`relative h-[100px] w-[100%]`}>
      <div className="marquee__inner">
      <div className={`${styles.flexCenter} w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] transition`}>
            <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
      </div>
    </section>
  )

export default Clients;
