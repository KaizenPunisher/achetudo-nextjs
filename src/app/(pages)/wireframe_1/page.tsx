export default function WireFrame_1() {
  return (
    <>
      <main className="relative top-0 left-0 m-auto flex h-screen w-screen flex-col items-center justify-center bg-white">
        <header className="sticky top-0 left-0 m-auto w-full bg-gray-800 p-2">
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold text-white">Dio Santos</h1>
          </div>
        </header>
        <div className="static m-auto h-full w-auto bg-amber-200">
          <div className="inline-block bg-gray-300">
            <h1 className="text-6xl font-bold">Dio Santos</h1>
            <p className="mt-4 text-center text-lg">
              Welcome to the Dio Santos page!
            </p>
          </div>
        </div>
        <footer className="static bottom-0 left-0 m-auto w-full bg-gray-800 p-4">
          <div className="flex justify-center">
            <p className="text-white">
              © 2023 Dio Santos. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
