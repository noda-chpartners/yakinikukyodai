import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/hero.png';

export default function HeroSection() {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: btnsRef, isVisible: btnsVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/60 via-transparent to-transparent" />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

      <div className="relative z-10 w-full h-dvh flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center justify-center pt-20 lg:pt-0">
          <div className="max-w-2xl w-full">
            <div
              ref={titleRef}
              className={`mt-6 transition-all duration-800 delay-150 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground-50 mt-2 tracking-wide">
                至福の味わいを、<br className="hidden sm:block" />日常に。
              </p>
            </div>
            <div
              ref={descRef}
              className={`mt-6 max-w-md transition-all duration-700 delay-300 ease-out ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
            </div>

            <div
              ref={btnsRef}
              className={`mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-500 ease-out ${btnsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
            
            </div>
          </div>

          <div className="flex-1 w-full lg:w-[40%] flex flex-col justify-center mt-8 lg:mt-0">

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-foreground-400 text-2xl w-6 h-6 flex items-center justify-center"></i>
        </div>
      </div>
    </section>
  );
}