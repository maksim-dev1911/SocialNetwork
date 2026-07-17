import React from 'react';

import MuiTabs, { TabsProps } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink } from 'react-router-dom';

export interface ITab {
  label: string;
  value: string | number;
  isLink?: boolean;
}

type PropsType = Omit<TabsProps, 'onChange'> & {
  tabs?: ITab[];
  value?: string | number;
  onChange?: (value: string | number) => void;
};

const Tabs: React.FC<PropsType> = ({ value = '', onChange, tabs = [], ...props }) => {
  const handleChange = (_: any, nextValue: string) => {
    if (onChange) {
      onChange(nextValue);
    }
  };

  const getTabProps = (tab: ITab) => {
    const tabProps: Record<string, any> = {
      label: tab.label,
      value: tab.value,
    };

    if (tab.isLink) {
      tabProps.component = NavLink;
      tabProps.to = tab.value;
    }

    return tabProps;
  };

  return (
    <MuiTabs
      value={value.toString()}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      sx={{
        mt: 2,
        mb: 0.5,
        minHeight: 48,
        backgroundColor: '#fff',
        borderRadius: 3,
        border: '1px solid rgba(226, 232, 240, 0.7)',
        boxShadow: '0 10px 28px rgba(15, 23, 42, 0.05)',
        px: 1,
        '& .MuiTabs-indicator': {
          height: 3,
          borderRadius: '3px 3px 0 0',
          bgcolor: 'primary.main',
        },
        '& .MuiTab-root': {
          textTransform: 'none',
          fontWeight: 650,
          fontSize: 14.5,
          minHeight: 48,
          color: 'text.secondary',
          '&.Mui-selected': {
            color: 'primary.main',
          },
        },
      }}
      {...props}
    >
      {tabs.map((tab) => (
        <Tab key={tab.value} {...getTabProps(tab)} />
      ))}
    </MuiTabs>
  );
};

export default React.memo(Tabs);
