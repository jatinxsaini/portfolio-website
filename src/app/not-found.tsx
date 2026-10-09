import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#E7E7E7] flex items-center justify-center p-4">
      <div className="max-w-md w-full bento-card bg-white p-8 sm:p-12 text-center shadow-lg">
        <div className="w-16 h-16 rounded-2xl bg-[#8585D1]/20 text-[#8585D1] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8" />
        </div>
        <span className="text-xs font-black uppercase tracking-widest bg-black/5 px-3 py-1 rounded-full text-[#8585D1] mb-4 inline-block">
          404 NOT FOUND
        </span>
        <h1 className="text-4xl font-black text-[#080808] mb-3">Page Not Found</h1>
        <p className="text-sm text-[#555555] mb-8 leading-relaxed">
          The page or resource you are looking for does not exist or has been moved.
        </p>
        <Button href="/" size="md" variant="primary">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Button>
      </div>
    </div>
  );
}
