import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import tennai from '@/assets/tennai.jpg';

export default function InfoSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  const infoCards = [
    {
      title: '営業時間',
      details: [
        { day: '平日', time: '11:00〜14:30 (L.O. 14:00)', time2: '15:00〜23:00 (L.O. 22:30)' },
        { day: '土日祝', time: '11:00〜23:00 (L.O. 22:30)' },
        { day: '定休日', time: 'なし' },
      ],
    },
    {
      title: '席・設備',
      details: [
        { day: '総席数', time: '51席' },
        { day: '貸切', time: '20～50人' },
        { day: 'たばこ', time: '全席禁煙,喫煙所あり' },
        { day: 'ベビーカー', time: '可' },
      ],
    },
    {
      title: 'お支払い方法',
      details: [
        { day: '現金', time: '可' },
        { day: 'クレジットカード', time: 'VISA,Master,JCB,AMEX,Diners' },
        { day: '電子マネー', time: '交通系,nanaco,WAON,iD' },
        { day: 'QRコード決済', time: 'PayPay,d払い,au PAY' },
        { day: 'チャージ料金', time: 'なし' },
      ],
    },
  ];

  return (
    <section
      id="info"
      className="relative w-full py-20 md:py-28 overflow-x-clip bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${tennai})` }}
    >
      <div className="absolute inset-0 from-background-900/60 to-background-900/40 bg-gradient-to-b  z-0" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/3 rounded-full blur-3xl" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div
          ref={titleRef}
          className={`flex flex-col items-center text-center mb-14 transition-all duration-700 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-yuji text-foreground-50 tracking-wide text-center">
            基本情報
          </h2>
          <p className="mt-4 max-w-lg text-foreground-100 text-sm leading-relaxed">
            焼肉兄弟 亀戸店の基本情報です。
            <br className="md:hidden" />
            ご不明な点はお気軽にお問い合わせください。
          </p>

        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCards.map((card, index) => (
            <div
              key={card.title}
              className={`rounded-2xl bg-background-50/50 backdrop-blur-sm p-8 flex flex-col transition-all duration-700 ease-out ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
            >
              <h3 className="text-accent-400 font-yuji text-2xl tracking-wide pb-4">
                {card.title}
              </h3>

              <div className="space-y-4 mb-8 flex-grow">
                {card.details.map((detail) => (
                  <div key={detail.day} className="flex flex-col gap-1 pb-3 last:border-0 last:pb-0">
                    <span className="text-foreground-400 text-xs font-label">{detail.day}</span>
                    <div className="flex flex-col">
                      <span className="text-foreground-200 text-base font-medium">{detail.time}</span>
                      {detail.time2 && (
                        <span className="text-foreground-200 text-base font-medium">{detail.time2}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}