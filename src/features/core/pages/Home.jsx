function Home() {
  // Define your image paths (make sure these images are in your public folder or handled by your build process)

  return (
    <>
      <section
        id="hero"
        className="h-[680px] px-[1rem] text-center bg-cover bg-center bg-no-repeat bg-[url('/images/hero/background-mobile.jpg')] lg:bg-[url('/images/hero/background-desktop.jpg')]"
      >
        <div className="h-[38rem] pt-[3rem] flex flex-col justify-between">
          <div className="flex flex-col items-center gap-4">
            <p className="uppercase tracking-[0.08rem] leading-none">
              Trusted Worldwide. Built for What's Next.
            </p>
            <h2 className="uppercase text-[2.5rem] font-var-extrabold-condensed leading-none">
              Get NASM Certified
              <br />
              Up to 50% Off
            </h2>
            <p className="w-[80%] text-[18px] tracking-[0.08rem] leeading-[27px]">
              Join 1.5M+ professionals who choose NASM to lead the way in
              fitness and wellness. A new season. A stronger you.
            </p>
          </div>
          <a href="" className="nasm-primary-btn text-[1.25rem]!">
            <span>Get Started Today</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
