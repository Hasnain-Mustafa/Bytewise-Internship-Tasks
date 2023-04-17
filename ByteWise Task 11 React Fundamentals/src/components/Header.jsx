import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAddTask, addTaskVisible }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          onClick={onAddTask}
          color={addTaskVisible ? "red" : "#000"}
          text={addTaskVisible ? "Close Form" : "Add Task"}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
export default Header;
