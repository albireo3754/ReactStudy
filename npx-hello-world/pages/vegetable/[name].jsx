import { useRouter } from "next/router";

const name = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h2>뭐야 이건</h2>
    </div>
  );
};

export default name;
