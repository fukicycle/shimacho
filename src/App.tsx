import Card from "./components/layouts/Card";
import MobileContainer from "./components/layouts/MobileContainer";

function App() {
  return (
    <>
      <MobileContainer>
        <div className="p-2 h-full w-full overflow-auto flex flex-col gap-2">
          <div className="sticky top-0 left-0 flex z-100">
            <div className="px-4 py-2 rounded-full shadow-lg border-l border-t border-white/30 flex gap-2 items-center backdrop-blur-sm">
              <h1 className="font-medium text-xl">shimacho</h1>
              <span className="bg-green-400/30 border border-green-700 rounded-full px-2 inset-shadow-sm">
                v0.0.1-beta
              </span>
            </div>
          </div>
          <section className="flex flex-col gap-2">
            <Card isLoading={false}>
              <div className="flex flex-col gap-2">
                <div className="text-center text-lg font-bold">
                  November, 2025
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-30 w-30">
                    <div className="absolute top-0 left-0 size-30 rounded-full bg-secondary/20 animate-pulse"></div>
                    <div className="absolute top-5 left-5 size-20 rounded-full bg-primary"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      <span className="text-lg font-bold">
                        ¥{(43215).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <div className="h-3 rounded-full w-10 bg-secondary/20 animate-pulse"></div>
                  <div className="h-3 rounded-full w-10 bg-secondary/20 animate-pulse"></div>
                  <div className="h-3 rounded-full w-10 bg-secondary/20 animate-pulse"></div>
                </div>
              </div>
            </Card>
            <Card isLoading={false}>
              <div className="flex flex-col gap-2">
                <div className="text-center text-lg font-bold">Categories</div>
                <div className="flex gap-2 items-center">
                  <span className="w-15">Food</span>
                  <span>:</span>
                  <span className="flex-1 h-5 rounded bg-accent"></span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-15">Daily</span>
                  <span>:</span>
                  <span className="w-40 h-5 rounded bg-accent"></span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-15">Utility</span>
                  <span>:</span>
                  <span className="w-30 h-5 rounded bg-accent"></span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-15">Hobbies</span>
                  <span>:</span>
                  <span className="w-20 h-5 rounded bg-accent"></span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-15">Phone</span>
                  <span>:</span>
                  <span className="w-15 h-5 rounded bg-accent"></span>
                </div>
              </div>
            </Card>
            <Card isLoading={false}>
              <div className="flex flex-col gap-2">
                <div className="text-center text-lg font-bold">
                  Daily Report
                </div>
                <div>Your expense is less than last week now!</div>
                <div>
                  Your saving costs is{" "}
                  <span className="font-bold">¥{(8432).toLocaleString()}!</span>
                  (<span className="text-sky-600 font-bold">10%</span>)
                </div>
              </div>
            </Card>
            <Card isLoading={true}>
              <div className="text-center text-lg font-bold">
                Monthly Ranking
              </div>
            </Card>
          </section>
          <div className="fixed left-0 bottom-0 w-full flex justify-center">
            <div className="max-w-[440px] w-full p-2 text-right">
              <button className="rounded-full shadow-xl border-l border-t border-white/30 p-2 cursor-pointer backdrop-blur-sm">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.125 16.875V5.625H16.875V16.875H5.625V19.125H16.875V30.375H19.125V19.125H30.375V16.875H19.125Z"
                    fill="#595C6B"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </MobileContainer>
    </>
  );
}

export default App;
