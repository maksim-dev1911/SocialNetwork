import {compose} from "@reduxjs/toolkit";
import React from "react";
import Users from "./People";
import withAuthGuard from "../../hoc/WithAuthRedirect";

export default compose<React.ComponentType>(
    withAuthGuard(),
    React.memo
)(Users);