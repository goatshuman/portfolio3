import { BrowserRouter } from "react-router-dom";

  import {
    About,
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
                  <ErrorBoundary>
                    <ElasticCursor />
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <EasterEggs />
                  </ErrorBoundary>
                  <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <ErrorBoundary>
                      <Hero />
                    </ErrorBoundary>
                  </div>
                  <ErrorBoundary>
                    <About />
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <Works />
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <Feedbacks />
                  </ErrorBoundary>
                  <div className="relative z-0">
                    <ErrorBoundary>
                      <Contact />
                    </ErrorBoundary>
                    <ErrorBoundary>
                      <StarsCanvas />
                    </ErrorBoundary>
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
  