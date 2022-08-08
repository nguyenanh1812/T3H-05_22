import React, { Fragment } from "react";

export default function PackagesIncludes({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <Fragment>
          <h4>Packges Includes</h4>
          <h3>{data.name}</h3>
        </Fragment>
      ))}
    </div>
  );
}
