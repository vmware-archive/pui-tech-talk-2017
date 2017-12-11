import React from 'react';

export const pepper = `${String.fromCharCode(55356)}${String.fromCharCode(57142)}`;

export const renderPeppers = n => (
  <span className="peppers">
  {pepper.repeat(n)}
  </span>
);

export const pepperOptions = [
  <option value="0"/>,
  <option value="1">{renderPeppers(1)}</option>,
  <option value="2">{renderPeppers(2)}</option>,
  <option value="3">{renderPeppers(3)}</option>,
  <option value="4">{renderPeppers(4)}</option>,
  <option value="5">{renderPeppers(5)}</option>
].map((e, key) => React.cloneElement(e, {key}));

export function prettifyContent(content) {
  return (<div className="table-drawer">
    <div className="table-drawer-content">
      <div className="table-drawer-container phxl">
        {content}
      </div>
    </div>
  </div>)
};

export const formatPrice = price => `$${(+price).toFixed(2)}`;