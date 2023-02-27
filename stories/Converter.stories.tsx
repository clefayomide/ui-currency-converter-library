import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Converter } from '../src/component/Converter/Converter';
import AppState from '../src/context/AppState';

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
  //   argTypes: {
  //     children: {
  //       control: {
  //         type: 'text',
  //       },
  //     },
  //   },
  // parameters: {
  //   controls: { expanded: true },
  // },
};

export default meta;

const Template: Story = args => <Converter {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
