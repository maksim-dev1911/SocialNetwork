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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  const handleChange = (_: any, value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  const getTabProps = (tab: ITab) => {
    const props: Record<string, any> = {
      label: tab.label,
      value: tab.value,
    };

    if (tab.isLink) {
      props.component = NavLink;
      props.to = tab.value;
    }

    return props;
  };

  return (
    <MuiTabs
      value={value.toString()}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      sx={{
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: 'rgba(226, 232, 240, 0.6)',
        boxShadow: '0px 12px 32px rgba(15, 23, 42, 0.06)',
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
