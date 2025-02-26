import Heading from '@Components/Typography/Heading/Heading';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Typography/Heading',
	component: Heading,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs']
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Heading',
		size: 'extraLarge'
	},
};
