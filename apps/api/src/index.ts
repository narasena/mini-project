import App from "./app2";


const main = async () => {
  // init db here

  await App()
};

main().catch(console.error)
