import "./App.css";
import AvatarGroup from "./components/AvatarGroup";

function App() {
  const users = [
    "Calos Tevez",
    "Luis Suarez",
    "Edison Cavani",
    "Abdur Rasyid",
    "Najwa Syihab",
  ];
  const maxLength = 4;
  const size = "lg";
  return (
    <AvatarGroup users={users} maxLength={maxLength} size={size} />
  );
}

export default App;
