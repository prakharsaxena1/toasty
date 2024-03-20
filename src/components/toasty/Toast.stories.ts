import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Toasty } from '.';
import './../../index.css';

const meta = {
  title: 'Toasty',
  component: Toasty,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { onClickAction: fn() },
} satisfies Meta<typeof Toasty>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: 'Primary toast',
    status: 'information',
    type: 'notification',
    showIcon: true,
    showDivider: true,
    showActionButton: true,
    showCloseButton: true,
    actionButtonLabel: 'Action',
  },
};

export const Secondary: Story = {
  args: {
    message: 'Secondary toast',
    status: 'success',
    type: 'default',
    showIcon: true,
    showDivider: true,
    showActionButton: false,
    showCloseButton: true,
    actionButtonLabel: 'Action',
  },
};

export const Tertiary: Story = {
  args: {
    message: 'Primary toast',
    status: 'error',
    type: 'notification',
    showIcon: true,
    showDivider: false,
    showActionButton: false,
    showCloseButton: true,
    actionButtonLabel: 'Action',
  },
};
