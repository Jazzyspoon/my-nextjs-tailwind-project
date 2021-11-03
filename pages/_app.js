import "tailwindcss/tailwind.css";
import { Header } from "./header";
import { Footer } from "./footer";

function MyApp({ Component }) {
  return (
    <div className="container-fluid justify-between flex flex-col h-screen">
      <Header />
      <Component />
      <Footer className="fixed bottom-0 w-full" />
    </div>
  );
}

export default MyApp;
