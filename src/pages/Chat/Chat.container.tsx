import React from 'react';
import { compose } from '@reduxjs/toolkit';
import Chat from './Chat';
import withAuthGuard from '../../hoc/WithAuthRedirect';

export default compose<React.ComponentType>(withAuthGuard(), React.memo)(Chat);
