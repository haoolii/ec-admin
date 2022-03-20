import React, { ReactElement } from 'react';

import {
  Route,
  RouteProps,
  Routes,
} from 'react-router-dom';

import Brand from './pages/Brand';
import Category from './pages/Category';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';

export enum MenuKey {
  DASHBOARD = "Dashboard",
  PRODUCT = "Product",
  CATEGORY = "Category",
  BRAND = "Brand",
}

export const menu: Record<string, RouteProps> = {
  [MenuKey.DASHBOARD]: { path: "/", element: Dashboard },
  [MenuKey.PRODUCT]: { path: "/product", element: Product },
  [MenuKey.CATEGORY]: { path: "/category", element: Category },
  [MenuKey.BRAND]: { path: "/brand", element: Brand },
};

export const getPath = (key: MenuKey) => menu[key].path as string;

export default function routes(
  routes: Record<string, RouteProps> = menu,
  path: string = ""
): ReactElement {
  return (
    <Routes>
      {Object.entries(routes).map(([key, route]) => {
        const Component = route.element as React.FunctionComponent;
        return (
          <Route element={<Component />} path={path + route.path} key={key} />
        );
      })}
    </Routes>
  );
}
