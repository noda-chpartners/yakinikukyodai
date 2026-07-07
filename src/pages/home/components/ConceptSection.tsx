import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import about from '@/assets/about.png';

export default function ConceptSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="concept" className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-6">

          <div
            className={`flex-1 w-full transition-all duration-[700ms] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <h2 className="text-3xl md:text-4xl font-yuji text-foreground-950 leading-tight tracking-wide">
              <span className="text-primary-600">旨い</span>・<span className="text-primary-600">安い</span>・<span className="text-primary-600">気軽</span>！<br />
              鮮度抜群の大満足焼肉
            </h2>
            <p className="mt-8 text-foreground-900 text-sm lg:text-lg leading-relaxed max-w-2xl">
              当店は、どなたでもふらっと立ち寄りやすい焼肉店です。
              鮮度抜群の美味しいお肉はもちろん、サイドメニューや豊富なドリンク類もこだわりのラインナップでご用意しております。<br /><br />
              私たちの願いは、<br />‟お客様にゆっくりお過ごしいただけること”。<br />
              ご家族での団らんから大人数でのご宴会、そしておひとり様の気ままな焼肉まで、どんなシーンでも気兼ねなくお過ごしください。<br />
              スタッフ一同、皆様のご来店を心よりお待ちしております。
            </p>
          </div>
          <div
            className={`flex-1 w-full max-w-xl lg:max-w-none transition-all duration-[700ms] delay-200 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            <img
              src={about}
              alt="about"
              className="w-full h-auto object-cover -skew-y-[5deg]
              [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}