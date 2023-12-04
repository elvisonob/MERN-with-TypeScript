import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
      ksljfdlkjsf
    </ChildAsFC>
  );
};

export default Parent;
