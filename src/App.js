import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function App() {
  return (
    <div className="container">
      <div >
          <OverlayTrigger 
          placement="right"
          overlay={<Tooltip>Thanks for Hovering! I'm a tooltip</Tooltip>}
          >
            <h1 className="HoverMe">Hover over me!</h1>
          </OverlayTrigger>
      </div>
    </div>
  );
}

export default App;
