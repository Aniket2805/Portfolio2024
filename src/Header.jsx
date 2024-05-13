import { useState } from "react";
import React from "react";
import Typed from "typed.js";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Formal from "./files/formal.png";
import Resume from "./files/Resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Developer", "Front End Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 dancing-script-500 text-white"
        aria-label="Global"
      >
        <div
          className="flex lg:flex-1"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <a href="/" className="-m-1.5 p-1.5 text-5xl">
            <span className="text-[#63e]">AK</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 text-xl">
          <a
            href="/"
            className="font-semibold leading-6 ease-in duration-200 hover:text-[#63e]"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            Home
          </a>
          <a
            href="#about"
            className="font-semibold leading-6 ease-in duration-200 hover:text-[#63e]"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            About
          </a>
          <a
            href="#skills"
            className="font-semibold leading-6 ease-in duration-200 hover:text-[#63e]"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="400"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="font-semibold leading-6 ease-in duration-200 hover:text-[#63e]"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="600"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="font-semibold leading-6 ease-in duration-200 hover:text-[#63e]"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="800"
          >
            Contact <span aria-hidden="true">&rarr;</span>
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        className="lg:hidden dancing-script-500"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black text-white px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="absolute inset-0 -z-10 h-full w-full items-center px-8 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div className="flex items-center justify-between">
              <a
                href="/"
                className="-m-1.5 p-1.5 text-4xl"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <span className="text-[#63e]">AK</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-900 "
                    data-aos="fade-left"
                    data-aos-duration="700"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-900"
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-delay="200"
                  >
                    About
                  </a>
                  <a
                    href="#skills"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-900"
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-delay="400"
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-900"
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-delay="600"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-900"
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-delay="800"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <div className="grid grid-cols-1 md:grid-cols-2 dancing-script-500 max-w-7xl mx-auto min[500px]:my-8 p-6 lg:px-8">
        <div
          className="text-white"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <div className="mb-6">
            <h3 className="text-4xl mb-2">Hello, It's Me</h3>
            <p className="text-7xl min-[380px]:text-[86px] mb-8 text-[#63e] font-bold">
              Aniket Kumar
            </p>
            <h3 className="text-3xl mb-4">
              And I'm a{" "}
              <span
                className="text-highlight text-4xl text-[#63e]"
                ref={el}
              ></span>
            </h3>
            <p className="text-xl">
              I'm a creative and motivated individual, combining my imagination
              with technical skills to develop innovative solutions that leave a
              lasting impression.
            </p>
          </div>
          <div className="social-media mb-6">
            <a
              href="https://www.facebook.com/profile.php?id=100055321989829"
              target={"_blank"}
            >
              <i className="fa-brands fa-facebook-f mr-3 mb-3 min-[410px]:mr-6 min-[410px]:mb-6"></i>
            </a>
            <a href="https://twitter.com/AniketK66947378" target={"_blank"}>
              <i className="fa-brands fa-twitter mr-3 mb-3 min-[410px]:mr-6 min-[410px]:mb-6"></i>
            </a>
            <a
              href="https://www.instagram.com/aniket28_kumar/"
              target={"_blank"}
            >
              <i className="fa-brands fa-instagram mr-3 mb-3 min-[410px]:mr-6 min-[410px]:mb-6"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aniket-kumar-1b01a3237/"
              target={"_blank"}
            >
              <i className="fa-brands fa-linkedin-in mr-3 mb-3 min-[410px]:mr-6 min-[410px]:mb-6"></i>
            </a>
            <a href="https://github.com/Aniket2805" target={"_blank"}>
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="cv">
            <a
              href={Resume}
              className="bg-black px-6 py-4 rounded-3xl shadow-[1px_3px_5px_rgb(242,242,242)] ease-in-out duration-200 hover:shadow-[1px_3px_10px_rgb(242,242,242)]"
            >
              <i className="fa-solid fa-circle-arrow-down mr-2"></i>
              Download CV
            </a>
          </div>
        </div>
        <div
          className="flex justify-center mt-6 md:mt-0"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          <img
            src={Formal}
            className="object-contain h-[30rem] w-[18rem] bg-[#63e] rounded-2xl shadow-[20px_20px_0px_rgb(242,242,242)] min-[400px]:shadow-[30px_30px_0px_rgb(242,242,242)] up-down"
          ></img>
        </div>
      </div>
    </header>
  );
}
