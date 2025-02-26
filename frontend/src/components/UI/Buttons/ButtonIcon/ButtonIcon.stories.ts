import ButtonIcon from '@Components/UI/Buttons/ButtonIcon/ButtonIcon';
import { Meta, StoryObj } from '@storybook/react';
import AlertCircle from '@Assets/icon/sprite/alert-circle-solid.svg?react';

const meta = {
	title: 'Button/ButtonIcon',
	component: ButtonIcon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Хз',
		size: 'large',
		type: 'primary',
	},
};
