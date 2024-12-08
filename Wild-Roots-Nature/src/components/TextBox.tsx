import React from "react";

export default function TextBox({
  title = "",
  top = "",
  middle = "",
  bottom = "",
  float = "",
  border = "",
  id = "",
}) {
  return (
    <div className="mx-40 p-10 bg-bgBox shadow-md" id={id}>
      <h2
        className={`text-8xl font-bold border-b 
          ${border === "right" ? "border-l" : "border-r"}
         border-black 
         ${float === "right" ? "float-right" : "float-left"} w-fit p-5 mx-10`}
      >
        {title}
      </h2>
      <div className="text-start text-3xl">
        <p className="font-medium">
          {top} <br />
          <span
            className="py-2 font-extralight"
            // style={{ borderTop: "green solid 1px", borderBottom: "green solid 1px"}}
          >
            {middle} <br />
          </span>
          {bottom}
        </p>
      </div>
    </div>
  );
}
