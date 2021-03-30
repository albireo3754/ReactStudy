import { NextPage } from 'next';
import { wrapper } from '../store';

const index: NextPage = () => {
  // console.log(process.env, '클라');
  return <div>hello world</div>;
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  console.log(store);
  try {
    // return { props: {} };
  } catch (e) {
    // return { props: {} };
  }
});
export default index;
