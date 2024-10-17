import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBar from "./task/TaskBar";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBar />
      </div>
      <Footer />
    </>
  );
}
