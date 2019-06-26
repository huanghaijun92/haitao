import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from '@/views/search';

const Com = () => (
  <div className = "container">
    <Switch>
      <Route path = "/empty/search" component = { Search } />
      {/* <Redirect to = "/empty/search" /> */}
    </Switch>
  </div>
)

export default Com;