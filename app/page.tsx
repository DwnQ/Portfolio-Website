"use client";

import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { ReactNode, Suspense, useEffect, useState } from "react";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import cn from "classnames";
import Footer from "@/components/Footer";
import Submenu from "@/components/Submenu";

const inter = Inter({ subsets: ["latin"] });

interface MenueItem {
  id: number;
  name: string;
  component: ReactNode;
}

const menuItems: MenueItem[] = [
  {
    id: 1,
    name: "About",
    component: <About />,
  },
  {
    id: 2,
    name: "Work Experience",
    component: <Experience />,
  },
  {
    id: 3,
    name: "Projects",
    component: <Projects />,
  },
];

export default function Home() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleMenuItemClick = (id: number) => {
    setActiveItem(id);

    // Get the corresponding element to scroll to
    const elementToScrollTo = document.getElementById(`section-${id}`);

    if (elementToScrollTo) {
      elementToScrollTo.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Extract the id from the observed element
        const id = Number(entry.target.id.replace("section-", ""));
        setActiveItem(id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed based on your design
    });

    // Observe each section element
    menuItems.forEach((item) => {
      const element = document.getElementById(`section-${item.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <Suspense fallback={null}>
      <Layout>
        <div className="container flex-row flex">
          <div className="w-6/12 text-left sticky top-0 h-1/2 pt-28 pl-10">
            <h1 className="text-4xl font-extrabold text-black dark:text-white">
              Darwin Qiu
            </h1>
            <h2 className="text-lg font text-black dark:text-white pb-10">
              Software Engineer
            </h2>
            {menuItems.map((item) => {
              return (
                <div
                  onClick={() => handleMenuItemClick(item.id)}
                  className="item-container cursor-pointer "
                  key={item.id}
                >
                  <div className="inline-flex ">
                    <div
                      className={cn("item-indicator mr-5", {
                        "active-item-indicator ": item.id === activeItem,
                      })}
                    ></div>
                    <h3 className="text-black dark:text-white">{item.name}</h3>
                  </div>
                </div>
              );
            })}
            <Footer />
          </div>

          <div className="w-4/5 text-left mt-10">
            {menuItems.map((item) => (
              <section
                className="py-10"
                id={`section-${item.id}`}
                key={`section-${item.id}`}
              >
                {item.component}
              </section>
            ))}
          </div>
        </div>
        <Submenu />
      </Layout>
    </Suspense>
  );
}
