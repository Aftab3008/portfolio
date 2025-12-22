"use client";

import Dock from "../ui/bits/Dock";
import Magnet from "../Magnet";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const items = [
  {
    text: "Home",
    label: "Home",
    onClick: () => scrollToSection("hero"),
  },
  {
    text: "About",
    label: "About",
    onClick: () => scrollToSection("skills"),
  },
  {
    text: "Projects",
    label: "Projects",
    onClick: () => scrollToSection("projects"),
  },
  {
    text: "Contact",
    label: "Contact",
    onClick: () => scrollToSection("contact"),
  },
];

export default function HomeDock() {
  const itemsWithMagnet = items.map((item) => ({
    ...item,
    text: (
      <Magnet padding={50} magnetStrength={4}>
        {item.text}
      </Magnet>
    ),
  }));

  return <Dock items={itemsWithMagnet} panelHeight={56} className="px-20" />;
}
