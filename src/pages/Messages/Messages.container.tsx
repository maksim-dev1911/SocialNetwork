import React from 'react';
import {compose} from "@reduxjs/toolkit";
import Messages from "./Messages";
import withAuthGuard from "../../hoc/WithAuthRedirect";

export default compose<React.ComponentType>(
    withAuthGuard(),
    React.memo
)(Messages);