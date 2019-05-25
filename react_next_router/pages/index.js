import Link from "next/link";

const Home = () => {
  return (
    <>
      <Link href="/about">
        <a>about</a>
      </Link>
      <br />
      <Link href="/user/profile">
        <a>profile</a>
      </Link>
      <div>Home</div>
    </>
  );
};

export default Home;
