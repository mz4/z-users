import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind();
Primary.args = {
  type: 'one',
  text: 'Primary',
  actionButton: null,
  dataTestId: 'btnPrimary',
};

export const Secondary = Template.bind();
Secondary.args = {
  type: 'two',
  text: 'Secondary',
  actionButton: null,
  dataTestId: 'btnSecondary',
};
