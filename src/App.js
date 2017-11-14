import React from "react";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";

const Schedule = () => (
  <div>
    <BreadcrumbsItem to="/schedule">Schedule</BreadcrumbsItem>
    Schedule
  </div>
);

const FullRoster = () => (
  <div>
    <ul>
      <li><Link to="/roster/1">Player 1</Link></li>
      <li><Link to="/roster/2">Player 2</Link></li>
      <li><Link to="/roster/3">Player 3</Link></li>
      <li><Link to="/roster/4">Player 4</Link></li>
    </ul>
  </div>
);

const Player = (props) => (
  <div>
    <BreadcrumbsItem to={`/roster/${props.match.params.id}`}>Player {props.match.params.id}</BreadcrumbsItem>
    Player {props.match.params.id}
  </div>
);

const Roster = () => (
  <div>
    <BreadcrumbsItem to="/roster">Roster</BreadcrumbsItem>
    <Switch>
      <Route exact path="/roster" component={FullRoster} />
      <Route exact path="/roster/:id" component={Player} />
    </Switch>
  </div>
);

const Home = () => (
  <div>
    Home
  </div>
);

const Main = () => (
  <main>
    <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/roster" component={Roster} />
      <Route path="/schedule" component={Schedule} />
    </Switch>
  </main>
);

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/roster">Roster</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
      </ul>
    </nav>
  </header>
);

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <hr />
        <Breadcrumbs
          separator={<b> / </b>}
          item={NavLink}
          finalItem={"b"}
          finalProps={{
            style: {color: "red"}
          }}
        />
        <hr />
        <Main />
      </div>
    );
  }
}

export default App;
