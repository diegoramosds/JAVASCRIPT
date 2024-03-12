import React from 'react';
import { Switch } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import Login from '../pages/login';
import Page404 from '../pages/page404';

export default function Routes() {
  // toast.success('Eu uso um ID personalizado', {
  //  toastId: 'customId',
  // theme: 'dark',
  // });
  // toast.error('Falha!', {
  // toastId: 'errorToastMessage',
  // theme: 'dark',
  // });

  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
