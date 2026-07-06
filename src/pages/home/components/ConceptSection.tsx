import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ConceptSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={sectionRef} id="concept" className="relative w-full py-24 md:py-32 bg-background-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/3 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div
            className={`flex-1 w-full transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="inline-block px-3 py-1 border border-accent-500/40 text-accent-500 text-xs font-label tracking-widest uppercase rounded-full">
              Concept
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-50 leading-snug tracking-wide">
              肉と火が<br />
              織りなす、<br />
              最高のひととき。
            </h2>
            <p className="mt-6 text-foreground-400 text-base leading-loose max-w-lg">
              焼肉兄弟 亀戸店は、厳選された国産黒毛和牛を中心に、
              熟練の職人が一枚一枚丁寧にカットした極上の焼肉をご提供します。
              炭火の遠赤外線効果で、外は香ばしく中はジューシーに仕上げる。
              それが私たちのこだわりです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}