import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import concept from '@/assets/concept.jpg';

export default function ConceptSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={sectionRef} id="concept" className="relative w-full py-24 md:py-32  overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/3 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div
            className={`flex-1 w-full transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-4xl font-yuji text-foreground-950 leading-snug tracking-wide">
            <span className="text-primary-400">旨い</span>・<span className="text-primary-400">安い</span>・<span className="text-primary-400">気軽</span>！<br />
            鮮度抜群の大満足焼肉
            </h2>
            <p className="mt-6 text-foreground-900 text-sm md:text-base leading-loose max-w-lg">
              当店は、どなたでもふらっと立ち寄りやすい焼肉店です。
              鮮度抜群の美味しいお肉はもちろん、サイドメニューや豊富なドリンク類もこだわりのラインナップでご用意しております。
              私たちの願いは、‟お客様にゆっくりお過ごしいただけること”。
              ご家族での団らんから大人数でのご宴会、そしておひとり様の気ままな焼肉まで、どんなシーンでも気兼ねなくお過ごしください。<br className="md:hidden" />
              スタッフ一同、皆様のご来店を心よりお待ちしております。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}