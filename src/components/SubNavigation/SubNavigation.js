import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { removeUnderline } from "../../constants/style";

export default function SubNavigation({ show }) {
  return (
    <div>
      <AppBar className="bg-dark" position="static">
        {show && (
          <Toolbar>
            <Link to="/add-question" style={removeUnderline}>
              <small className="text-white text-bold-spaced fs-14 nav-link">
                Add Questions
              </small>
            </Link>
            <Link to="/questions" style={removeUnderline}>
              <small className="text-white text-bold-spaced fs-14 nav-link">
                Questions
              </small>
            </Link>
            <Link to="/add-student" style={removeUnderline}>
              <small className="text-white text-bold-spaced fs-14 nav-link">
                Add student
              </small>
            </Link>
            <Link to="/students" style={removeUnderline}>
              <small className="text-white text-bold-spaced fs-14 nav-link">
                Students
              </small>
            </Link>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
}
