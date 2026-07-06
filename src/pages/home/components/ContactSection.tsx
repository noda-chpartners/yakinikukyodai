import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import yakiniku from '@/assets/yakiniku.png';

export default function ContactSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="contact" className="relative w-full  py-20 md:py-28 overflow-hidden">
       <img
        src={yakiniku}
        alt=""
        aria-hidden="true"
       className="absolute z-0 bottom-0 left-0 w-full h-auto object-contain object-bottom pointer-events-none opacity-90"
      />
        <div className={`relative z-10 flex flex-col items-center justify-center px-8 py-16 lg:py-0 transition-all duration-800 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
        }`}>
          <div className="max-w-md w-full text-center">
            <h2 className="text-4xl md:text-5xl font-yuji text-foreground-950 tracking-wide mb-3">
              ご予約
            </h2>
            <p className="text-foreground-900 text-base leading-relaxed mb-4">
              お席のご予約、宴会のご相談など、<br />お気軽にお電話ください。
            </p>

            <a
              href="tel:03-5875-2371"
              className="whitespace-nowrap cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-foreground-50 font-label font-bold rounded-full hover:bg-primary-600 transition-all duration-300 text-lg mb-6"
            >
              <i className="ri-phone-line w-5 h-5 flex items-center justify-center"></i>
              03-5875-2371
            </a>

            <p className="text-foreground-900 text-base leading-relaxed mb-4">
              hotpepperでのご予約や食べログからのご予約も可能です。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.hotpepper.jp/strJ001282244/yoyaku/hpds/?ROUTE_KBN=20&dspn=wqroao6hSzYRAAZM_H7krs0DR2trz7lQOxi7xMVLSy60iQC9Af4lmqjeneqZsRUPxSYJiJutD4idLABW_xkUfQ"
              className="whitespace-nowrap cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-foreground-50 font-label font-bold rounded-full hover:bg-primary-600 transition-all duration-300 text-lg"
            >
              <i className="ri-external-link-line w-5 h-5 flex items-center justify-center"></i>
              hotpepperで予約
            </a>
            <a
              href="https://tabelog.com/tokyo/A1312/A131202/13257161/"
              className="whitespace-nowrap cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-foreground-50 font-label font-bold rounded-full hover:bg-primary-600 transition-all duration-300 text-lg"
            >
              <i className="ri-external-link-line w-5 h-5 flex items-center justify-center"></i>
              食べログで予約
            </a>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8 pt-8">
              <span className="text-foreground-900 text-sm font-label">Follow us</span>
              <a
                href="https://www.instagram.com/yakiniku.kyodai/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="cursor-pointer w-10 h-10 rounded-full border border-primary-500 flex items-center justify-center hover:bg-primary-500/10 hover:border-primary-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-primary-500 text-lg w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}