import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  sidebarParent: {
    backgroundColor: "#f4f4f4",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    padding: "10px"
  },
  link: {
    padding: "0 20px",
    cursor: "pointer",
    height: "36px",
    lineHeight: "36px",
    transition: "all 600ms",
    borderRadius: "100px",
    background: "transparent",
    display: "grid",
    gridTemplateColumns: "40px 1fr",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#e9e9e9",
      color: "#000"
    }
  },
  linkText: {

  },
  linkIcon: {
    width: "26px",
    height: "26px",
    opacity: .6
  },
  activeLink: {

  }
}));

const entries = {
  "/": {
    name: "Me",
    icon: "glyphicons-user.svg"
  },
  "/build": {
    name: "Build",
    icon: "glyphicons-claw-hammer.svg"
  },
  "/code": {
    name: "Code",
    icon: "glyphicons-code.svg"
  },
  "https://www.goodreads.com/user/show/72735131-nickg902": {
    name: "Books",
    icon: "glyphicons-book.svg"
  },
  "https://github.com/nickg902": {
    name: "Github",
    icon: "github.svg"
  },
  "https://twitter.com/nickg902": {
    name: "Twitter",
    icon: "twitter.svg"
  }
};

export default withRouter(function SideBar(props) {
  console.log(props)
  const classes = useStyles();
  const sidebarContent = Object.keys(entries).map((key) => {
    const entry = entries[key];

    return (
      <div
        key={entry.name}
        className={classes.link}
      >
        <img
          className={classes.linkIcon}
          src={`./images/${entry.icon}`}
          alt={entry.name}
        />
        <span 
          className={classes.linkText}
        >
          {entry.name}
        </span>
      </div>
    );
  });

  return (
    <div className={classes.sidebarParent}>
      {sidebarContent}
    </div>
  );
});
