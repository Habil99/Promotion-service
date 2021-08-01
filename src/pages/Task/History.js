import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Modal from "../../shared/Modal";
import ProgressBar from "../../shared/ProgressBar";

const History = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [progressPoints] = useState([
    { start: 335, end: 890 },
    { start: 500, end: 500 },
  ]);

  return (
    <div>
      <h4 className="main-wrapper-title">Task history</h4>
      <div className="history-wrapper">
        <div className="history-table table-responsive-lg">
          <table className="table table-borderless">
            <thead>
              <tr className="history-table-row">
                <th>Status</th>
                <th>Network</th>
                <th>Type of task</th>
                <th>Progress</th>
                <th className="text-center">Coins</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="history-table-row">
                <td className="history-table-cell">
                  <img
                    src={"/assets/images/pause.svg"}
                    alt="Promotion service"
                  />
                </td>
                <td className="history-table-cell">
                  <div className="__flex">
                    <img
                      src={"/assets/images/behance.svg"}
                      alt="Promotion Service (Behance Network)"
                    />
                    <p>Behance</p>
                  </div>
                </td>
                <td className="history-table-cell">
                  <div className="__flex">
                    <img
                      src={"/assets/images/like-icon.svg"}
                      alt="Promotion Service (Likes task)"
                    />
                    <p>Likes</p>
                  </div>
                </td>
                <td className="progressbar-cell">
                  <ProgressBar points={progressPoints[0]} />
                </td>
                <td className="text-center">10</td>
                <td className="text-center">
                  {progressPoints[0].start === progressPoints[0].end ? (
                    <img src={"/assets/images/checkmark.svg"} alt="" />
                  ) : (
                    <button
                      onClick={() => setIsOpen(true)}
                      className="btn"
                      type="button"
                      role="dialog"
                    >
                      <img src={"/assets/images/trash.svg"} alt="" />
                    </button>
                  )}
                </td>
              </tr>
              <tr className="history-table-row">
                <td className="history-table-cell">
                  <img
                    src={"/assets/images/play.svg"}
                    alt="Promotion service"
                  />
                </td>
                <td className="history-table-cell">
                  <div className="__flex">
                    <img
                      src={"/assets/images/dribbble.svg"}
                      alt="Promotion Service (Dribbble Network)"
                    />
                    <p>Dribbble</p>
                  </div>
                </td>
                <td className="history-table-cell">
                  <div className="__flex">
                    <img
                      src={"/assets/images/comment-2.svg"}
                      alt="Promotion Service (Comments task)"
                    />
                    <p>Comments</p>
                  </div>
                </td>
                <td className="progressbar-cell">
                  <ProgressBar points={progressPoints[1]} />
                </td>
                <td className="text-center">100</td>
                <td className="text-center">
                  {progressPoints[1].start === progressPoints[1].end ? (
                    <img src={"/assets/images/checkmark.svg"} alt="" />
                  ) : (
                    <button
                      onClick={() => setIsOpen(true)}
                      className="btn"
                      type="button"
                      role="dialog"
                    >
                      <img src={"/assets/images/trash.svg"} alt="" />
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center">
          <button className="show-more">Show more</button>
        </div>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={200}
        unmountOnExit
        classNames="dropdown"
        onEnter={() => setIsOpen(true)}
        onExit={() => setIsOpen(false)}
      >
        <Modal setIsOpen={setIsOpen} />
      </CSSTransition>
    </div>
  );
};

export default History;
