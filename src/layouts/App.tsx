import React from 'react';

import Menu from '../components/Menu';
import routes, {
  getPath,
  MenuKey,
} from '../routes';
import Layout from './Layout';

const menuList: Record<MenuKey, string> = {
  [MenuKey.BRAND]: 'Brand',
  [MenuKey.CATEGORY]: 'Category',
  [MenuKey.DASHBOARD]: 'DASHBOARD',
  [MenuKey.PRODUCT]: 'PRODUCT'
}

function App() {

  const menus = Object.entries(menuList).map(([key, text]) => ({
    text,
    to: getPath(key as MenuKey)
  }))
  return (
    <div className="App">
      <Layout
        menu={<Menu list={menus}></Menu>}
      >
        {routes()}
      </Layout>
    </div>
  );
}

export default App;
