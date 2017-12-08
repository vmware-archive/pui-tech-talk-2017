import React from 'react';

export const pepper = `${String.fromCharCode(55356)}${String.fromCharCode(57142)}`;

export const pepperOptions = [
  <option value="0"/>,
  <option value="1">{pepper}</option>,
  <option value="2">{pepper}{pepper}</option>,
  <option value="3">{pepper}{pepper}{pepper}</option>,
  <option value="4">{pepper}{pepper}{pepper}{pepper}</option>,
  <option value="5">{pepper}{pepper}{pepper}{pepper}{pepper}</option>
].map((e, key) => React.cloneElement(e, {key}));
export const renderPeppers = n => pepper.repeat(n);
export function prettifyContent(content) {
  return (<div className="table-drawer">
    <div className="table-drawer-content">
      <div className="table-drawer-container phxl">
        {content}
      </div>
    </div>
  </div>)
};