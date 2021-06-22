import React, { useEffect } from "react";
import { setActiveDashboard } from "../../redux/actions/dashBoard";
import { useSelector, useDispatch } from "react-redux";
import Dasboard from "../DashBoard/Dasboard";

export const MenuContent = () => {
	const dashboard = useSelector(state => state.dashboard);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setActiveDashboard(dashboard.activeDashBoard));
	}, [dashboard.activeDashBoard]);

	switch (dashboard.activeDashBoard) {
		default:
			return <Dasboard />;
	}
};
