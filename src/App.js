import "./App.css";
import Profile from "./Components/Profile/Profile";

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
    </div>
  );
};

export default App;
