import { NavLink } from "react-router-dom";

const getActiveStyle = ({ isActive }) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
  color: isActive ? "red" : "",
  marginRight: "10px",
});

export const Header = () => {
  return (
    <>
      <h1>My MailBox</h1>

      <header>
        <nav>
          <NavLink to="/inbox" style={getActiveStyle}>
            Inbox
          </NavLink>
          <NavLink to="/sent" style={getActiveStyle}>
            Sent
          </NavLink>
        </nav>
      </header>
    </>
  );
};
