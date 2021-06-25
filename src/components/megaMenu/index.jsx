import React from "react";
import { MobileMegaMenu } from "./mobile/MobileMegaMenu";
import "./style.css";
import { WebMegaMenu } from "./web/WebMegaMenu";

export const MegaMenu = ({ history }) => {
  return (
    <div>
      <div  className="cs-show-web" history={history}>
        <WebMegaMenu history={history}/>
      </div>
      <div  className="cs-show-mobile">
        <MobileMegaMenu history={history}/>
      </div>
    </div>
  );
};
