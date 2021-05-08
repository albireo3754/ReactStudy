import { NextPage } from 'next';
import { wrapper } from '../store';

const index: NextPage = () => {
  // console.log(process.env, '클라');
  return <div>안녕하세요 위 게임중 하나를 클릭하여 보세요.</div>;
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
