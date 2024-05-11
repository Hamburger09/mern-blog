import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble} from 'react-icons/bs'
const FooterCom = () => {
  return (
    <Footer className="border border-t-8 border-teal-500" container>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap  text-lg sm:text-xl font-semibold ">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Dilshod&apos;s
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://memories-dilshod.netlify.app/"
                  target="_blank"
                  rel=" noopener noreferrer">
                  Memories App
                </Footer.Link>

                <Footer.Link
                  href="https://helpful-axolotl-f1f2ff.netlify.app/"
                  target="_blank"
                  rel=" noopener noreferrer">
                  Netflix Clone
                </Footer.Link>
                <Footer.Link
                  href="https://glistening-cannoli-2fd2c1.netlify.app/"
                  target="_blank"
                  rel=" noopener noreferrer">
                  GPT-3 Open AI
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Hamburger09"
                  target="_blank"
                  rel=" noopener noreferrer">
                  Github
                </Footer.Link>

                <Footer.Link
                  href="https://instagram.com/dead_shod"
                  target="_blank"
                  rel=" noopener noreferrer">
                  Instagram
                </Footer.Link>
                <Footer.Link
                  href="https://glistening-cannoli-2fd2c1.netlify.app/"
                  target="_blank"
                  rel=" noopener noreferrer"></Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>

                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex sm:items-center  justify-between flex-col sm:flex-row">
          <Footer.Copyright href="#" by="Dilshod&apos;s blog" year={new Date().getFullYear()}/>
          <div className="flex  items-center gap-6 sm:mt-3 mt-4 sm:justify-center"> 
            <Footer.Icon href="#" icon={BsFacebook}/>
            <Footer.Icon href="#" icon={BsInstagram}/>
            <Footer.Icon href="#" icon={BsDribbble}/>
            <Footer.Icon href="#" icon={BsGithub}/>
            <Footer.Icon href="#" icon={BsTwitter}/>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
