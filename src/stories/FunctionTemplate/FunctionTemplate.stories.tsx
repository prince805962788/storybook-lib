import { StoryFn } from '@storybook/react';
import { counter } from '@/packages';

const counterExample = () => {
  const result = counter(2, 4);

  return (
    <div>
      <p>counter Result: {result}</p>
    </div>
  );
};
export default {
  title: 'Functions/counter',
  component: counterExample,
};

const Template: StoryFn = () => {
  const result = counter(2, 4);

  return (
    <div>
      <p>counter Result: {result}</p>
    </div>
  );
};
export const Demo: StoryFn = Template.bind({});
