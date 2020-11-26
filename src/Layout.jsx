import React from 'react';

export default function Layout(props) {
  return (
    <div className="content-parent">
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};

