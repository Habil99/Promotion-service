import React from "react";
import CustomCheckbox from "../shared/CustomCheckbox";

const CreateTask = () => {
  return (
    <div>
      <h4 className="main-wrapper-title">Task creation</h4>
      <div className="create-task-section">
        <div className="create-task-wrapper">
          <p className="create-task-label">Select a social network</p>
          <div className="checkboxes">
            <CustomCheckbox logo={'/assets/images/dribbble.svg'} label={'Dribbble'} />
            <CustomCheckbox logo={'/assets/images/behance.svg'} label={'Behance'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
