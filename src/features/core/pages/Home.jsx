function Home() {
  // Define your image paths (make sure these images are in your public folder or handled by your build process)

  return (
    <>
      <section
        id="hero"
        className="h-[680px] max-h-[680px] px-[1rem] text-center bg-cover bg-center bg-no-repeat bg-[url('/images/hero/background-mobile.jpg')] md:bg-[url('/images/hero/background-desktop.jpg')] md:max-h-[576px] xl:h-[775px] xl:max-h-[775px] xl:bg-top"
      >
        <div className="h-[38rem] pt-[3rem] flex flex-col justify-between md:pt-[6rem] md:justify-start lg:pt-[7rem] xl:pt-[13rem] xl:ml-[4rem]">
          <div className="flex flex-col items-center gap-4 md:w-[45%] md:items-start md:text-left lg:w-[400px] xl:w-[580px]">
            <p className="uppercase tracking-[0.08rem] leading-none">
              Trusted Worldwide. Built for What's Next.
            </p>
            <h2 className="uppercase text-[2.5rem] font-var-extrabold-condensed leading-none lg:text-[3rem] xl:text-[4rem]">
              Get NASM Certified
              <br />
              Up to 50% Off
            </h2>
            <p className="w-[80%] text-[18px] tracking-[0.08rem] leeading-[27px]">
              Join 1.5M+ professionals who choose NASM to lead the way in
              fitness and wellness. A new season. A stronger you.
            </p>
          </div>
          <a href="" className="nasm-primary-btn text-[1.25rem]! md:w-[220px]! md:mt-[1.25rem] lg:mt-[3.25rem]">
            <span>Get Started Today</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
