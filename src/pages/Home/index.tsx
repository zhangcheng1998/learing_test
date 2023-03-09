// ./src/pages/Home/index.tsx
const Home = () => {
  return (
    <div>
      <h1>helslo-ssr</h1>
      <button
        onClick={(): void => {
          alert("hello-ssr");
        }}
      >
        alert
      </button>
    </div>
  );
};

export default Home;
