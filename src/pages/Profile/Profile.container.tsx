import React from "react";
import Profile from "./Profile";
import {compose} from "@reduxjs/toolkit";

export default compose<React.ComponentType>(
    React.memo
)(Profile);