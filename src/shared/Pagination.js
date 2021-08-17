import React, { useCallback, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { getNews } from "../redux/newsSlice";

const Pagination = ({ totalPage }) => {
	const location = useLocation();
	const history = useHistory();
	const dispatch = useDispatch();

	const paginate = useCallback(
		(page) => {

			try {
				dispatch(getNews(page));
				history.push(`/news?page=${page}`);
			} catch (err) {
				console.log(err);
				throw err;
			}
		},
		[dispatch, history]
	);

	useEffect(() => {
		const page = parseInt(location.search.split("?page=").join(""));

		if (page > 1) {
			paginate(page);
		}
	}, [location.search, paginate])

	return (
		<ReactPaginate
			previousLabel={"prev"}
			nextLabel={"next"}
			breakLabel={"..."}
			breakClassName={"truncate pagination-item"}
			pageCount={totalPage}
			marginPagesDisplayed={1}
			pageRangeDisplayed={2}
			containerClassName={"pagination"}
			activeClassName={"active"}
			pageClassName={"pagination-item"}
			previousClassName={"pagination-item"}
			nextClassName={"pagination-item"}
			disabledClassName={"disabled"}
			onPageChange={({ selected }) => paginate(selected + 1)}
		/>
	);
};

export default Pagination;
