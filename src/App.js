import "./App.css";
import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";

const App = (props) => {
  return (
    <div>
      <Profile
        username={props.user.username}
        tag={props.user.tag}
        location={props.user.location}
        avatar={props.user.avatar}
        stats={props.user.stats}
      />
      <Statistics title={props.data.title} stats={props.data} />
    </div>
  );
};

export default App;
