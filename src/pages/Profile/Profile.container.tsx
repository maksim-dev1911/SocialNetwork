import React from "react";
import Profile from "./Profile";
import {compose} from "@reduxjs/toolkit";
import withAuthGuard from "../../hoc/WithAuthRedirect";

export default compose<React.ComponentType>(
    withAuthGuard(),
    React.memo
)(Profile);