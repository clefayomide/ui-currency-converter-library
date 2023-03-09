import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Converter } from './Converter';
import { AppState } from '../../context/AppState';

const meta: Meta = {
  title: 'UI Currency Converter',
  component: Converter,
  decorators: [
    Story => {
      return (
        <AppState>
          <Story />
        </AppState>
      );
    },
  ],
};

const Template: Story = args => {
  return <Converter {...args} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  buttonBG: '#3B82F6',
  buttonHeight: '48px',
};

Default.argTypes = {
  buttonBG: {
    control: { type: 'color' },
    description: 'HEX Color code',
  },
};

export default meta;
