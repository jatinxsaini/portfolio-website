import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ResumePdfViewer } from '@/components/ui/ResumePdfViewer';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { profileData } from '@/data/profile';
import { socialLinksData } from '@/data/social-links';

export const metadata: Metadata = {
  title: `Résumé | ${profileData.name}`,
  description: `View and download ${profileData.name}'s résumé.`,
  alternates: {
    canonical: '/resume',
  },
};

const resumeSocialLinks = socialLinksData.filter(
  (link) => link.url && link.platform !== 'email',
);

export default function ResumePage() {
  return (
    <main id="main-content" className="resume-page">
      <div className="resume-page__inner">
        <header className="resume-page__header">
          <Link className="resume-page__brand" href="/">
            {profileData.name}
          </Link>

          <nav className="resume-page__navigation" aria-label="Resume page navigation">
            <Link href="/" className="resume-page__home-link">
              <ArrowLeft aria-hidden="true" />
              Home
            </Link>
            <ul className="resume-page__socials" aria-label="Social profiles">
              {resumeSocialLinks.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <SocialIcon name={link.iconName} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <section className="resume-page__content" aria-labelledby="resume-heading">
          <h1 id="resume-heading">Resume</h1>
          <p className="resume-page__role">{profileData.role}</p>
          <ResumePdfViewer name={profileData.name} pdfUrl={profileData.resumeUrl} />
        </section>
      </div>
    </main>
  );
}
