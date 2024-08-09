import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";

const Font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="/icons8-notion-48 (1).png" alt="Logo" width="40" height="40"
      className="dark:hidden" />
      <Image src="/icons8-notion-48 (3).png" alt="Logo" width="40" height="40"
      className="hidden dark:block" />





      <p className={cn('font-semibold',Font.className)}>Notion</p>
    </div>
  );
};

export default Logo;
