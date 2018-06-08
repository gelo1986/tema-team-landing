import React from 'react';
import { Switch, Route } from 'react-router';

import 'assets/screens.scss';
import './style.scss';

const HomeScreen = () => (
  <div>
    <Switch>
      <Route path="/about/team" component={() => <div>team</div>} />
      <Route path="/about/ci" component={() => <div>ci/cd</div>} />
      <Route path="/about/workflow" component={() => <div>workflow</div>} />
      <Route path="/about/tools" component={() => <div>tools</div>} />
      <Route path="/about" component={() => <div>main</div>} />
    </Switch>
  </div>
);

export default HomeScreen;
