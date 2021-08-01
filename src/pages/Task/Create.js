import React from "react";
import { Link } from "react-router-dom";
import CustomCheckbox from "../../shared/CustomCheckbox";
import InputField from "../../shared/InputField";

const CreateTask = () => {
  return (
    <div>
      <h4 className="main-wrapper-title">Task creation</h4>
      <div className="create-task-section">
        <div className="create-task-wrapper">
          <p className="create-task-label">Select a social network</p>
          <div className="checkboxes">
            <CustomCheckbox
              logo={"/assets/images/dribbble.svg"}
              label={"Dribbble"}
            />
            <CustomCheckbox
              logo={"/assets/images/behance.svg"}
              label={"Behance"}
            />
          </div>
        </div>
        <div className="create-task-wrapper">
          <p className="create-task-label">Task type</p>
          <div className="checkboxes">
            <CustomCheckbox
              logo={"/assets/images/like-icon.svg"}
              label={"Likes"}
            />
            <CustomCheckbox
              logo={"/assets/images/followers-2.svg"}
              label={"Followers"}
            />
            <CustomCheckbox
              logo={"/assets/images/comment-2.svg"}
              label={"Comments"}
            />
            <CustomCheckbox logo={"/assets/images/views.svg"} label={"Views"} />
          </div>
        </div>
        <div className="create-task-wrapper">
          <p className="create-task-label">Project link</p>
          <InputField
            type="url"
            disabled={false}
            label="task-creation-link"
            required={true}
            title="For example: https://dribbble.com/shots/Example-Name"
            value="https://dribbble.com/shots/13967318-Dribbble-Promotion-Service-UI-Components"
          />
        </div>
        <div className="create-task-wrapper">
          <div className="grid__col-3">
            <div className="grid-item">
              <div className="grid-item__create-task">
                <p className="fs-14">Execution cost</p>
                <p className="fs-14">At least 20 coins for execution (50% goes to the site commission)</p>
                <button className="button" disabled>
                  <img src={'/assets/images/coin.svg'} alt="" />
                  <span>
                    30
                  </span>
                </button>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-item__create-task">
                <p className="fs-14">How much do you need ?</p>
                <p className="fs-14">At least 10 executions, a maximum of 1000</p>
                <button className="button" disabled>
                  <img src={'/assets/images/thunder.svg'} alt="" />
                  <span>
                    300
                  </span>
                </button>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-item__create-task">
                <p className="fs-14">Pin my task to the top</p>
                <p className="fs-14">Additional cost is charged - 500 coins</p>
                <CustomCheckbox />
              </div>
            </div>
          </div>
        </div>
        <Link to="/task-list" className="button-purple">
          Create task
        </Link>
      </div>
    </div>
  );
};

export default CreateTask;
