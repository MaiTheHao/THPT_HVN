import React from "react";
import MemForm from "./Members/MemForm";
import ClassForm from "./Classes/ClassForm";
import GroupForm from "./Groups/GroupForm";
import ActForm from "./Activities/ActForm";
import PageNotFound from "../../../../../Except/PageNotFound";

const listForm = {
	tv: <MemForm />,
	lp: <ClassForm />,
	nh: <GroupForm />,
	hd: <ActForm />,
};

function Route({id}) {
	return <>
    {listForm[id] || <PageNotFound/>}
    </>;
}

export default Route;
