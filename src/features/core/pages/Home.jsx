function Home() {
  // Define your image paths (make sure these images are in your public folder or handled by your build process)

  return (
    <>
      <section
        id="hero"
        className="h-[680px] bg-cover bg-center bg-no-repeat bg-[url('/images/hero/background-mobile.jpg')] lg:bg-[url('/images/hero/background-desktop.jpg')]"
      >
        <div>
          <div>
            <p>Trusted by 1.5M+ Pros</p>
            <h2>Build Your Future With the Industry Leader</h2>
            <p>Join the world's top fitness professionals. For a limited time, save up to 50%</p>
          </div>
          <a href=""><span>Save up to 50%</span></a>
        </div>
      </section>
    </>
  );
}

export default Home;