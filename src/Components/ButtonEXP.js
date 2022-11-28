import React from "react";

import Button from "./common/Button/index";

export default function ButtonEXP() {

  const saveClickHandler = e => {
    alert("Clicked on save Button");
  };

  return (
    <div>
      <Button
        id={"btnSave"}
        type={"Submit"}
        value={"Save"}
        isDisabled={false}
        clickHandler={saveClickHandler}
      />
    </div>
  );
}
