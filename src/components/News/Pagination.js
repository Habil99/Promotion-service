import { useSelector } from "react-redux";
import { newsSelector } from "../../redux/news.selector";
import { Truncate, Paginate } from "../../assets/utils";
import { useHistory } from "react-router";
import { useEffect, useRef } from "react";

const Pagination = () => {
  const paginationWrapper = useRef(null);
  const page = useSelector(newsSelector.page);
  const pageSize = useSelector(newsSelector.pageSize);
  const total = useSelector(newsSelector.total);
  const history = useHistory();
  const number_of_pages = parseFloat((total / pageSize).toFixed());

  const getActiveItem = () => {
    const active = document.querySelector(".pagination-wrapper-item.active");
    return active && active;
  };

  useEffect(() => {
    new Truncate(paginationWrapper.current, getActiveItem());
  }, []);

  const initPagination = (event) => {
    const pagination_item = event.target;
    const paginate = new Paginate(
      paginationWrapper.current,
      pagination_item,
      page,
      pageSize,
      total,
      history
    );
    paginate.init();
  };

  return (
    <div className="pagination">
      <ul className="pagination-wrapper" ref={paginationWrapper}>
        <li className="pagination-wrapper-item prev hide">Prev</li>
        {Array(number_of_pages)
          .fill(null)
          .map((_, item) => (
            <li
              key={item + 1}
              className="pagination-wrapper-item"
              onClick={initPagination}
              data-target={item + 1}
            >
              {item + 1 < 9 ? `0${item + 1}` : item + 1}
            </li>
          ))}
        <li
          className="pagination-wrapper-item active"
          onClick={initPagination}
          data-target="9"
        >
          09
        </li>
        <li className="pagination-wrapper-item next" onClick={initPagination}>
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
