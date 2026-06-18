import { FC } from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/shared/ui";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* left */}
        <div className="flex gap-2">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
            <p className="text-sm leading-3 text-gray-400">
              вкусней уже некуда
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <User size={16} />
            Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>520 ₽</b>
              <span className="mx-3 inline-block h-full w-[1px] bg-white/20" />
              <div className="flex items-center gap-1 transition-all duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative mr-1" />
                <b>3</b>
              </div>

              <ArrowRight className="absolute top-1/2 right-[20px] translate-x-[-12px] -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
