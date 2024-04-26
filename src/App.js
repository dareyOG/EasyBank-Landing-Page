import { useState } from 'react';
import { easyBank, latestArticles } from './easyBank';

export default function App() {
  return (
    <div className="font-Sans text-blue text-center relative">
      <EasyBankApp />
    </div>
  );
}

function EasyBankApp() {
  const [isOpen, setIsOpen] = useState(false);

  // set handler to open/close modal window
  const handlerOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <Nav isOpen={isOpen} handlerOpen={handlerOpen} />
      <Header />
      <Body />
      <Footer />
    </>
  );
}

function Nav({ isOpen, handlerOpen }) {
  return (
    <>
      <nav className="fixed w-full desktop:h-[5.2rem] py-5 flex bg-white bg-opacity-95 desktop:bg-opacity-100 mobile:justify-between mobile:px-4 desktop:justify-around mobile:items-center desktop:absolute z-20">
        <div className="w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" width="139" height="20">
            <defs>
              <linearGradient id="a" x1="72.195%" x2="17.503%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#33D35E" />

                <stop offset="100%" stopColor="#2AB6D9" />
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <path
                fill="#2D314D"
                fillRule="nonzero"
                d="M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z"
              />
              <g fill="url(#a)">
                <path d="M10.802 0L0 19.704h5.986L16.789 0z" />
                <path opacity=".5" d="M18.171 0L7.368 19.704h5.986L24.157 0z" />
                <path opacity=".15" d="M25.539 0L14.737 19.704h5.986L31.525 0z" />
              </g>
            </g>
          </svg>
        </div>
        <nav className="hidden desktop:block h-auto">
          <ul className="flex flex-row justify-center items-center gap-x-8">
            <li>
              <a href="#home" className="navBorder">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navBorder">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="navBorder">
                Contact
              </a>
            </li>
            <li>
              <a href="#blog" className="navBorder">
                Blog
              </a>
            </li>
            <li>
              <a href="#careers" className="navBorder">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden desktop:flex desktop:justify-center desktop:items-center h-auto bg-gradient-to-r from-green to-cyan  text-white px-9 py-3 rounded-full cursor-pointer hover:opacity-40">
          Request Invite
        </div>
        <div className="w-[2rem] cursor-pointer desktop:hidden" onClick={handlerOpen}>
          {!isOpen ? (
            <img src="./images/icon-hamburger.svg" alt="menu" />
          ) : (
            <img src="./images/icon-close.svg" alt="close" />
          )}
        </div>
      </nav>
      {isOpen && <Modal />}
    </>
  );
}

function Modal() {
  return (
    <div className="absolute z-10 top-10 left-0 bg-blue/80 h-full w-full desktop:hidden">
      <div className="fixed z-30 top-[15%] left-1/2 -translate-x-1/2 bg-white text-blue w-4/5 mx-auto py-8 tablet:py-10 rounded-md ">
        <ul className="flex flex-col gap-6">
          <li>
            <a href="#home" className="hover:text-green/80">
              Home
            </a>
          </li>
          <li>
            <a href="#company" className="hover:text-green/80">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green/80">
              Contact
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-green/80">
              Blog
            </a>
          </li>
          <li>
            <a href="#careers" className="hover:text-green/80">
              Careers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Body() {
  return (
    <>
      <EasyBank />
      <Articles />
    </>
  );
}

function Header() {
  return (
    <header className="relative flex mobile:flex-col desktop:flex-row-reverse justify-center items-center desktop:pl-36">
      <div className="w-full relative overflow-x-hidden">
        <img src="./images/bg-intro-mobile.svg" alt="intro" className="w-full desktop:hidden" />
        <img
          src="./images/bg-intro-desktop.svg"
          alt="intro"
          className="hidden desktop:block relative top-[-6.5rem] right-[-10rem]"
        />
        <div>
          <img
            src="./images/image-mockups.png"
            alt="mockupImage"
            className="desktop:w-[50rem] m-auto absolute p-5 mobile:h-[33rem] desktop:h-full mobile:top-[-7.55rem] desktop:top-0 desktop:right-[-9rem]"
          />
        </div>
      </div>
      <div className="w-full pb-10 desktop:w-1/2">
        <h1 className="text-[2.5rem] desktop:text-[3rem] desktop:text-start font-light leading-normal w-auto mx-auto">
          Next generation digital banking
        </h1>
        <p className="text-gray-300 py-[2rem] w-auto mx-auto px-5 desktop:px-0 desktop:text-[1.3rem] text-base text-justify desktop:text-wrap">
          Take your financial life online. Your Easybank account will be a one-stop-shop for
          spending, saving, budgeting, investing, and much more.
        </p>
        <div className="w-1/2 bg-gradient-to-r from-green to-cyan text-white px-9 py-3 mx-auto rounded-full cursor-pointer desktop:mx-0 hover:opacity-40 ">
          Request Invite
        </div>
      </div>
    </header>
  );
}

function EasyBank() {
  return (
    <main className="p-12 bg-gray-200  desktop:px-36 ">
      <div className="font-light mb-10 desktop:text-justify desktop:w-1/2">
        <h1 className="mobile:text-[2rem] desktop:text-[2.85rem] mb-5">Why choose Easybank?</h1>
        <p className="text-gray-300 mobile:text-[1rem] desktop:text-[1.2rem] ">
          We leverage Open Banking to turn your bank account into your financial hub. Control your
          finances like never before.
        </p>
      </div>
      <div className="flex basis-full flex-row justify-center items-center flex-wrap gap-6">
        {easyBank.map((bank) => (
          <Bank
            image={bank.image}
            title={bank.title}
            text={bank.text}
            alt={bank.alt}
            key={bank.title}
          />
        ))}
      </div>
    </main>
  );
}

function Bank({ image, alt, title, text }) {
  return (
    <div className="w-[20rem] desktop:text-start space-y-5 cursor-default desktop:hover:-translate-y-5 transition-all duration-500 ease-out">
      <img src={image} alt={alt} className="mx-auto desktop:mx-0" />
      <h2 className="text-[1.5rem]">{title}</h2>
      <p className="text-gray-300 text-base">{text}</p>
    </div>
  );
}

function Articles() {
  return (
    <aside className="bg-gray-100 mobile:p-[1rem] desktop:p-36 w-full ">
      <h1 className="mobile:text-[2rem] desktop:text-[2.85rem] font-light mb-10 desktop:text-start">
        Latest Articles
      </h1>
      <div className="flex basis-full flex-row flex-wrap gap-6">
        {latestArticles.map((article) => (
          <Article
            image={article.image}
            author={article.author}
            title={article.title}
            article={article.article}
            alt={article.alt}
            key={article.title}
          />
        ))}
      </div>
    </aside>
  );
}

function Article({ image, author, title, article, alt }) {
  return (
    <div className=" w-[20rem] bg-gray-100 cursor-pointer desktop:hover:scale-105 desktop:hover:shadow-xl transition-all duration-500 ease-out">
      <div className="w-full mx-auto">
        <img
          src={image}
          alt={alt}
          className="w-full mobile:h-[15rem] desktop:h-[20rem] rounded-t-[0.9rem]"
        />

        <div className="flex basis-full flex-col justify-center items-start text-start bg-white p-7 gap-2">
          <p className="font-light text-[0.5rem] desktop:text-[0.9rem] text-gray-300">
            By {author}
          </p>
          <h2 className=" text-[0.9rem] desktop:text-[1.3rem] hover:text-green">{title}</h2>

          <p className="font-light text-[0.9rem] desktop:text-[1rem] text-gray-300">{article}</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <>
      <footer className="bg-blue text-white flex flex-col desktop:flex-row flex-wrap mobile:justify-center desktop:justify-around items-center py-10">
        <div className="py-7 flex flex-col justify-center mobile:items-center desktop:items-start gap-14">
          <svg xmlns="http://www.w3.org/2000/svg" width="139" height="20">
            <defs>
              <linearGradient id="a" x1="72.195%" x2="17.503%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#33D35E" />
                <stop offset="100%" stopColor="#2AB6D9" />
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <path
                fill="white"
                fillRule="nonzero"
                d="M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z"
              />
              <g fill="url(#a)">
                <path d="M10.802 0L0 19.704h5.986L16.789 0z" />
                <path opacity=".5" d="M18.171 0L7.368 19.704h5.986L24.157 0z" />
                <path opacity=".15" d="M25.539 0L14.737 19.704h5.986L31.525 0z" />
              </g>
            </g>
          </svg>
          <ul className="flex space-x-5">
            <li>
              <a href="#facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[20px] w-[20px] fill-white hover:fill-green hover:stroke-green"
                >
                  <path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#youtube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[20px] w-[20px] fill-white hover:fill-green hover:stroke-green"
                >
                  <path d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[20px] w-[20px] fill-white hover:fill-green hover:stroke-green"
                >
                  <path d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#pinterest">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[20px] w-[20px] fill-white hover:fill-green hover:stroke-green"
                >
                  <path d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[20px] w-[20px] fill-white hover:fill-green hover:stroke-green"
                >
                  <path d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col desktop:basis-[25rem] desktop:flex-row desktop:justify-around">
          <ul className="">
            <li className="py-2 desktop:text-start hover:text-green">
              <a href="#aboutUs">About Us</a>
            </li>
            <li className="py-2 desktop:text-start hover:text-green">
              <a href="#contact">Contact</a>
            </li>
            <li className="py-2 desktop:text-start hover:text-green">
              <a href="#blog">Blog</a>
            </li>
          </ul>
          <ul className="">
            <li className="py-2 desktop:text-start hover:text-green">
              <a href="#careers">Careers</a>
            </li>
            <li className="py-2 desktop:text-start hover:text-green">
              <a href="#support">Support</a>
            </li>
            <li className="py-2 desktop:text-start hover:text-green">
              <a href="#privacypolicy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="bg-gradient-to-r from-green to-cyan  px-9 py-3 my-5 rounded-full cursor-pointer  hover:opacity-45">
            Request Invite
          </div>
          <p className="text-gray-300">&copy; EasyBank. All Rights Reserved</p>
        </div>
      </footer>
      <div className="bg-blue text-gray-300 text-[1rem]">
        Challenge by
        <a
          className="hover:text-gray-100"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          {' '}
          Frontend Mentor
        </a>
        . Coded by
        <a className=" hover:text-gray-100" href="#">
          {' '}
          Oludire Damilare
        </a>
        .
      </div>
    </>
  );
}
