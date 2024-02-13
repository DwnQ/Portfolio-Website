import React, { ReactNode, useState } from "react";
import ThemeToggler from "@/components/ThemeToggler";
import CV from "@/components/CV";
import UpAnchor from "@/components/UpAnchor";
import { Minus, Plus } from "lucide-react";
import "./styles.scss";

interface MenueItem {
  id: number;
  name: string;
  component: ReactNode;
}

const menueItem: MenueItem[] = [
  {
    id: 1,
    name: "Theme",
    component: <ThemeToggler />,
  },
  {
    id: 2,
    name: "CV",
    component: <CV />,
  },
  {
    id: 3,
    name: "Go Up",
    component: <UpAnchor />,
  },
];

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 flex items-end flex-col-reverse">
      <div onClick={toggleMenu}>
        <div className="cursor-pointer p-2 bg-gray-300 rounded-full">
          {!isOpen ? (
            <Plus className="dark:text-white text-black" />
          ) : (
            <Minus className="dark:text-white text-black" />
          )}
        </div>
      </div>
      {isOpen && (
        <>
          {menueItem.map((item) => {
            return (
              <div
                className="submenu-item slidein cursor-pointer"
                key={item.id}
              >
                <div className="inline-flex py-1">{item.component}</div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Index;
