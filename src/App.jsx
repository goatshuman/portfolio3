import { BrowserRouter } from "react-router-dom";

  import {
    About,
    Achievement,
    Contact,
    Feedbacks,
    Hero,
    Navbar,
    Preloader,
    StarsCanvas,
    Works,
  } from "./components";
  import EasterEggs from "./components/EasterEggs";
  import ElasticCursor from "./components/ElasticCursor";
  import SkillKeyboard from "./components/SkillKeyboard";
  import ReactBitsAudioProvider from "./reactbits/context/ReactBitsAudioProvider";
  import ReactBitsCursorProvider from "./reactbits/context/ReactBitsCursorProvider";
  import ErrorBoundary from "./components/ErrorBoundary";

  const App = () => {
    return (
      <ErrorBoundary>
        <ReactBitsCursorProvider>
          <ReactBitsAudioProvider>
            <Preloader>
              <BrowserRouter>
                <div
                  className="relative z-0"
                  style={{ backgroundColor: "hsl(222.2 84% 4.9%)" }}
                >
                  <ErrorBoundary><ElasticCursor /></ErrorBoundary>
                  <ErrorBoundary><EasterEggs /></ErrorBoundary>
                  <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <ErrorBoundary><Hero /></ErrorBoundary>
                  </div>
                  <ErrorBoundary><StarsCanvas /></ErrorBoundary>
                  <ErrorBoundary><About /></ErrorBoundary>
                  <ErrorBoundary><Works /></ErrorBoundary>
                  <ErrorBoundary><Achievement /></ErrorBoundary>
                  <ErrorBoundary><SkillKeyboard /></ErrorBoundary>
                  <ErrorBoundary><Feedbacks /></ErrorBoundary>
                  <div className="relative z-0">
                    <ErrorBoundary><Contact /></ErrorBoundary>
                  </div>
                </div>
              </BrowserRouter>
            </Preloader>
          </ReactBitsAudioProvider>
        </ReactBitsCursorProvider>
      </ErrorBoundary>
    );
  };

  export default App;
  