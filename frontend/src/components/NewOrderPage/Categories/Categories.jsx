import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import React from 'react';

const Categories = ({categories}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsElements = categories.map((category) => (
      <Tab label={category.name} key={category.id}/>
  ));

  return (
      <Paper square>
        <Tabs value={value} indicatorColor="primary" textColor="primary"
              onChange={handleChange} aria-label="disabled tabs example">
          {tabsElements}
        </Tabs>
      </Paper>
  );
};
export default Categories;