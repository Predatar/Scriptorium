import Body from '@Components/Typography/Body/Body';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Typography/Body',
	component: Body,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs']
} satisfies Meta<typeof Body>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Body',
		size: 'extraLarge'
	},
};
