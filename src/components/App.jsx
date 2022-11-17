import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { user } from "user";
import { data } from "data";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101', 
        textAlign: "center"
      }}
    >
      <h1>React homework template</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}  
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};



