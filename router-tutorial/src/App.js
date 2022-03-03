import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to ="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">history 예제</Link>
        </li>
        {/* <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li> */}
      </ul>
      <hr />
      <Route path='/' component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      {/* <Route path="/profile/:username" component={Profile} /> */}
      <Route path='/profiles' component={Profiles} />
      <Route path='/history' component={HistorySample} />
    </div>
  );
};
export default App;