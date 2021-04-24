import { NextPage } from 'next';
import { wrapper } from '../store';
import Home from '../components/Home';

const index: NextPage = () => {
  // console.log(process.env, '클라');
  return <Home />;
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  try {
    // return { props: {} };
  } catch (e) {
    // return { props: {} };
  }
});
export default index;
