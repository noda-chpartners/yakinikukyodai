import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="contact" className="relative w-full bg-background-50 overflow-hidden">
      <div className="flex items-center justify-center">
          <div className="absolute top-8 left-8">
            <span className="text-foreground-50/70 text-xs font-label tracking-widest uppercase">
              Reservation
            </span>
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-50 leading-tight tracking-wide">
              ご予約・<br />お問い合わせ
            </h2>
          </div>
        </div>
        <div className={` bg-background-50 flex flex-col items-center justify-center px-8 py-16 lg:py-0 transition-all duration-800 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
        }`}>
          <div className="max-w-md w-full text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50 tracking-wide mb-3">
              お電話でのご予約
            </h3>
            <p className="text-foreground-400 text-sm leading-relaxed mb-8">
              お席のご予約、宴会のご相談など、<br />お気軽にお電話ください。
            </p>

            <a
              href="tel:03-5875-2371"
              className="whitespace-nowrap cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-foreground-50 font-label font-bold rounded-full hover:bg-primary-600 transition-all duration-300 text-lg mb-6"
            >
              <i className="ri-phone-line w-5 h-5 flex items-center justify-center"></i>
              03-5875-2371
              <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center"></i>
            </a>

            <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-secondary-200">
              <span className="text-foreground-400 text-xs font-label">Follow us</span>
              <a
                href="https://www.instagram.com/yakiniku.kyodai/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="cursor-pointer w-10 h-10 rounded-full border border-accent-500/40 flex items-center justify-center hover:bg-accent-500/10 hover:border-accent-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-accent-500 text-lg w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}