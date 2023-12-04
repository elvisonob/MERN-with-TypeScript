import { Child } from './Child';

const Parent = () => {
  return (
    <Child
      color="no love"
      onClick={() => {
        console.log('click me');
      }}
    />
  );
};

export default Parent;
