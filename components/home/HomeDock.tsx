"use client";

import Dock from "../ui/bits/Dock";
import Magnet from "../Magnet";
import { useLenis, scrollToElement } from "../SmoothScroll";

export default function HomeDock() {
  const { lenis } = useLenis();

  const scrollToSection = (id: string) => {
    scrollToElement(id, lenis, { offset: 0, duration: 1.2 });
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
