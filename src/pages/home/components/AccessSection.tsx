import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import tennai from '@/assets/tennai.jpg';

export default function AccessSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      id="access"
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 pb-24 md:pb-32 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${tennai})` }}
    >
      <div className="absolute inset-0 from-background-900/40 to-background-900/30 bg-gradient-to-b z-0" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        

        <div className="relative bg-background-50/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row items-stretch">
            
            <div className={`hidden md:block md:w-[45%] lg:w-[50%] relative transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
            
              <div className="absolute inset-0 w-full h-full [filter:invert(90%)_hue-rotate(180deg)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.091759862108!2d139.8263799!3d35.6993595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889cd1d580e17%3A0x6d5e5a64396070cf!2z54S86IKJ5YWE5byfIOS6gOaIuOW6lw!5e0!3m2!1sja!2sjp!4v1783302268547!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="焼肉兄弟 亀戸店 地図"
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
            </div>

            {/* Right: Info */}
            <div className={`w-full md:w-[55%] lg:w-[50%] p-6 md:p-12 lg:p-16 flex flex-col justify-center transition-all duration-800 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-8'
            }`}>
             

              <h2 className="text-2xl md:text-3xl font-yuji text-foreground-50 tracking-wide mb-6">
                アクセス
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <i className="ri-map-pin-line text-accent-500 text-xl w-5 h-5 flex items-center justify-center mt-0.5"></i>
                  <div>
                    <p className="text-foreground-200 text-base font-label leading-relaxed">
                      〒136-0071 東京都江東区亀戸<br />５丁目１３−７第2丸惣ビル 1F
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

             

              {/* モバイル時はマップが消え、このボタンのみで誘導する形になります */}
              <a
                href="https://maps.app.goo.gl/yEkyJsz3eEfo5zni6"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="whitespace-nowrap cursor-pointer self-start inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-background-900 font-label font-medium rounded-full hover:bg-accent-400 transition-colors duration-300 text-sm mt-2"
              >
                <i className="ri-map-2-line w-4 h-4 flex items-center justify-center"></i>
                Google Mapで見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}