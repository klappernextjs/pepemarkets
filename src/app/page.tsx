import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import SwapInterface from '@/components/SwapInterface';
import TweetComposer from '@/components/TweetComposer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F6FF]">
      <Header />
      <main className="pt-24 px-4 pb-24 md:pb-8">
        <TweetComposer />
        <SwapInterface />
      </main>
      <MobileNav />
    </div>
  );
}