import React, {
  FC,
  ReactNode,
} from 'react';

import styles from './Layout.module.scss';

interface Props {
    menu: ReactNode,
}


 
const Layout: FC<Props> = ({ menu, children }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.aside}>
                <div className={styles.wrapper}>
                    {menu}
                </div>
            </div>

            <div className={styles.header}></div>
            <div className={styles.banner}></div>
            
            { children }
        </div>
    )
}

export default Layout