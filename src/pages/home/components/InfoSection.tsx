import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function InfoSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  // 画像URLを削除し、データ構造をシンプルに
  const infoCards = [
    {
      label: '営業時間',
      title: 'Open Hours',
      details: [
        { day: '平日', time: '11:00〜14:30 (L.O. 14:00)', time2: '15:00〜23:00 (L.O. 22:30)' },
        { day: '土日祝', time: '11:00〜23:00 (L.O. 22:30)' },
      ],
      note: '定休日：なし',
    },
    {
      label: '席数',
      title: 'Seats',
      details: [
        { day: '総席数', time: '51席' },
        { day: '貸切', time: '最大51名様まで' },
      ],
      note: '各種宴会・貸切対応',
    },
    {
      label: 'お問い合わせ',
      title: 'Contact',
      details: [
        { day: '電話', time: '03-5875-2371' },
        { day: '予約', time: 'お電話にて受付中' },
        { day: 'SNS', time: 'Instagram公式' },
      ],
      note: '当日予約も承ります',
    },
  ];

  return (
    <section id="info" className="relative w-full py-20 md:py-28 bg-background-50 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/3 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div ref={titleRef} className="flex flex-col lg:flex-row lg:items-end gap-6 mb-14">
          <div
            className={`flex-1 transition-all duration-700 ease-out ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-50 tracking-wide">
              基本情報
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold italic text-accent-500 mt-1 tracking-wide">
              Information
            </p>
          </div>
          <div
            className={`lg:w-[40%] transition-all duration-700 delay-100 ease-out ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-foreground-400 text-sm leading-relaxed">
              焼肉兄弟 亀戸店の基本情報です。
              ご来店前にご確認いただき、ご不明な点はお気軽にお問い合わせください。
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card, index) => (
            <div
              key={card.label}
              className={`rounded-2xl bg-secondary-100 border border-secondary-300 p-8 flex flex-col transition-all duration-700 ease-out ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block text-accent-500 text-xs font-label tracking-widest uppercase bg-accent-500/10 px-3 py-1 rounded-full">
                  {card.label}
                </span>
                <h3 className="text-foreground-50 font-heading font-bold text-xl tracking-wide">
                  {card.title}
                </h3>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                {card.details.map((detail) => (
                  <div key={detail.day} className="flex flex-col gap-1 border-b border-secondary-300/50 pb-3 last:border-0 last:pb-0">
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

              <p className="text-accent-500/80 text-sm font-label border-t border-secondary-300 pt-4 mt-auto">
                {card.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}