import { Background } from '@/blocks/Background';
import { Footer } from '@/blocks/Footer';
import { Header } from '@/blocks/Header';
import { ReactNode } from 'react';

const HeaderHeight = 60;
const FooterHeight = 52;
const ContentHeight = `calc(100% - ${HeaderHeight}px - ${FooterHeight}px)`;

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute flex flex-col w-full">
      <div className="relative flex flex-col">
        <div style={{ minHeight: HeaderHeight, maxHeight: HeaderHeight, zIndex: 1 }}>
          <Header />
        </div>
        <div style={{ minHeight: ContentHeight, maxHeight: ContentHeight }}>{children}</div>
        <div style={{ minHeight: FooterHeight, maxHeight: FooterHeight }}>
          <Footer />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 flex flex-col">
        <Background />
      </div>
    </div>
  );
};
