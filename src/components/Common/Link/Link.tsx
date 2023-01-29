import React, { useMemo } from 'react';
import cn from 'classnames';

import { Link, useLocation, useResolvedPath } from 'react-router-dom';
import LinkComponent, { LinkProps } from '@mui/material/Link';

type ChildrenFnType = (props: { isActive: boolean }) => React.ReactNode;

type PropsType = Omit<LinkProps, 'children'> & {
    to: string;
    children?: React.ReactNode | ChildrenFnType;
};

const AppLink: React.FC<PropsType> = ({ to, className, children, ...props }) => {
    const location = useLocation();
    const { pathname } = useResolvedPath(to);

    const isActive = useMemo(
        () => location.pathname.startsWith(pathname),
        [location.pathname, pathname]
    );

    const renderChildren = () => {
        if (typeof children === 'function') {
            return (children as ChildrenFnType)({ isActive });
        }

        return children;
    };

    return (
        <LinkComponent
            {...props}
            component={Link}
            className={cn(className, { active: isActive })}
            to={to}
        >
            {renderChildren()}
        </LinkComponent>
    );
};

export default React.memo(AppLink);
