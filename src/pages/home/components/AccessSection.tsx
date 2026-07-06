import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AccessSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="access" ref={sectionRef} className="relative w-full py-24 md:py-32 bg-background-50 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative bg-secondary-100 rounded-3xl overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-8 left-8 z-20">
            <svg width="80" height="120" viewBox="0 0 80 120" fill="none" className="opacity-30">
              <path
                d="M10 110 Q10 10 40 10 Q70 10 70 30 Q70 50 40 30 Q10 10 20 60 Q30 80 50 70 Q70 60 60 90 Q50 110 30 100 Q10 90 20 70"
                stroke="oklch(0.72 0.14 90)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left: Image */}
            <div className={`lg:w-[40%] relative transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="h-64 lg:h-full min-h-[320px] overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Japanese%20yakiniku%20restaurant%20exterior%20at%20night%20with%20warm%20glowing%20lanterns%2C%20noren%20curtain%20at%20entrance%2C%20traditional%20wooden%20facade%2C%20modern%20signage%2C%20urban%20Tokyo%20street%2C%20atmospheric%20moody%20photography&width=700&height=900&seq=access-store-2026&orientation=portrait"
                  alt="焼肉兄弟 亀戸店 外観"
                  title="焼肉兄弟 亀戸店 店舗外観"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className={`lg:w-[60%] p-8 md:p-12 lg:p-16 flex flex-col justify-center transition-all duration-800 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div className="text-accent-500 text-6xl font-heading leading-none mb-6 opacity-50">
                &ldquo;
              </div>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50 tracking-wide mb-6">
                アクセス
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <i className="ri-map-pin-line text-accent-500 text-xl w-5 h-5 flex items-center justify-center mt-0.5"></i>
                  <div>
                    <p className="text-foreground-200 text-base font-label leading-relaxed">
                      〒136-0071 東京都江東区亀戸５丁目１３−７
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-train-line text-accent-500 text-xl w-5 h-5 flex items-center justify-center mt-0.5"></i>
                  <div>
                    <p className="text-foreground-200 text-base font-label leading-relaxed">
                      亀戸駅 徒歩10分
                    </p>
                    <p className="text-foreground-500 text-xs font-label mt-0.5">
                      JR総武線 / 東武亀戸線
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-secondary-300 pt-5 mb-6">
                <p className="text-foreground-300 text-sm font-label">
                  焼肉兄弟 亀戸店
                </p>
                <p className="text-foreground-500 text-xs font-label">
                  江東区亀戸エリア
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=東京都江東区亀戸５丁目１３−７"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="whitespace-nowrap cursor-pointer self-start inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-background-900 font-label font-medium rounded-full hover:bg-accent-400 transition-colors duration-300 text-sm"
              >
                <i className="ri-map-2-line w-4 h-4 flex items-center justify-center"></i>
                Google Mapで見る
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-8 rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9!2d139.8264!3d35.7027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzA5LjciTiAxMznCsDQ5JzM1LjAiRQ!5e0!3m2!1sja!2sjp!4v1700000000000"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="焼肉兄弟 亀戸店 地図"
            className="w-full rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}