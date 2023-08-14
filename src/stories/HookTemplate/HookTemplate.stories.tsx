import { StoryFn } from '@storybook/react';
import { useTimeout } from '@/packages';
import { useState } from 'react';

const useTimeoutExample = () => {
  const [value, setValue] = useState(0);
  const delaySet = useTimeout(() => {
    setValue(value + 1);
  }, 3000);

  return (
    <div>
      delay 3s：<button onClick={() => delaySet}>+1</button>
      <p>Hook Result: {value}</p>
    </div>
  );
};
export default {
  title: 'Hooks/useTimeout',
  component: useTimeoutExample,
};

const Template: StoryFn = useTimeoutExample;

export const Demo: StoryFn = Template.bind({});
