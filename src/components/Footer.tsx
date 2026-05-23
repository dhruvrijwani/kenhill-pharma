import React from 'react';
import { Mail, Phone, MapPin, Award, Shield, CheckCircle } from 'lucide-react';

interface FooterProps {
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-section text-white pt-16 pb-8 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('home')}>
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold">
                KH
              </div>
              <div>
                <span className="block text-lg font-bold tracking-tight text-white leading-none">
                  KEN HILL
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-accent font-semibold">
                  PHARMA LIMITED
                </span>
              </div>
            </div>
            
            <p className="text-xs text-text-muted leading-relaxed">
              We specialize in the professional sourcing, compliance verification, and international trading of top-tier active pharmaceutical ingredients, drug intermediates, and life science components.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <div className="flex items-center space-x-2 text-xs text-accent">
                <Shield className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-wider text-[10px]">WHO-GMP compliant supply</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-6">
              Corporate Directory
            </h4>
            <ul className="space-y-3 text-xs text-text-muted">
              <li>
                <button onClick={() => navigate('home')} className="hover:text-white transition-colors">
                  Home Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => navigate('about')} className="hover:text-white transition-colors">
                  About Ken Hill
                </button>
              </li>
              <li>
                <button onClick={() => navigate('apis')} className="hover:text-white transition-colors">
                  Active APIs List
                </button>
              </li>
              <li>
                <button onClick={() => navigate('intermediates')} className="hover:text-white transition-colors">
                  Drug Intermediates
                </button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="hover:text-white transition-colors">
                  Contact & Sourcing Help
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: API Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-6">
              API Therapeutic Lines
            </h4>
            <ul className="space-y-3 text-xs text-text-muted">
              <li>
                <button onClick={() => navigate('apis', { category: 'cardiovascular' })} className="hover:text-white transition-colors">
                  Cardiovascular & Bone Health
                </button>
              </li>
              <li>
                <button onClick={() => navigate('apis', { category: 'cns-neurological' })} className="hover:text-white transition-colors">
                  CNS & Neurological Assets
                </button>
              </li>
              <li>
                <button onClick={() => navigate('apis', { category: 'gastrointestinal' })} className="hover:text-white transition-colors">
                  Gastrointestinal Motility
                </button>
              </li>
              <li>
                <button onClick={() => navigate('apis', { category: 'respiratory' })} className="hover:text-white transition-colors">
                  Respiratory & Anti-Gout
                </button>
              </li>
              <li>
                <button onClick={() => navigate('apis', { category: 'endocrine-metabolic' })} className="hover:text-white transition-colors">
                  Endocrine & Metabolic Loops
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Core */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-6">
              Global Support
            </h4>
            <ul className="space-y-4 text-xs text-text-muted">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  K10 Tower A, Floor No. 512, Grand Sarabhai Compound, Behind Genda Circle, Vadodara – 390007, Gujarat, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@kenhillpharma.com (Contact) / info@anidin.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 9924073338</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-2xs text-text-muted text-center sm:text-left">
            &copy; {currentYear} Ken Hill Pharma Limited. All Rights Reserved. Sourcing compliance audited yearly.
          </div>

          <div className="flex items-center space-x-6 text-2xs uppercase tracking-wider text-accent font-semibold">
            <span className="flex items-center space-x-1">
              <CheckCircle className="w-3.5 h-3.5 text-accent" />
              <span>WHO-GMP Certified</span>
            </span>
            <span className="flex items-center space-x-1">
              <CheckCircle className="w-3.5 h-3.5 text-accent" />
              <span>COA Verified</span>
            </span>
            <span className="flex items-center space-x-1">
              <CheckCircle className="w-3.5 h-3.5 text-accent" />
              <span>DMF Ready</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
