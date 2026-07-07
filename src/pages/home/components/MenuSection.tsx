import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import menu1 from '@/assets/niku1.jpg';
import menu2 from '@/assets/niku2.jpg';
import menu3 from '@/assets/niku3.jpg';
import menu4 from '@/assets/bibinba.jpg';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'ネギロース',
    description: 'あああああああああああああああああああああああああああああああああああああああああああああああああ',
    price: '¥',
    imageUrl: menu1,
  },

  {
    id: 2,
    name: '多分タン',
    description: 'あああああああああああああああああああああああああああああああああああああああああああああああああ',
    price: '¥',
    imageUrl: menu2,
  },
  {
    id: 3,
    name: 'これ何',
    description: 'あああああああああああああああああああああああああああああああああああああああああああああああああ',
    price: '¥',
    imageUrl: menu3,
  },
  {
    id: 4,
    name: 'ビビンバ丼',
    description: 'あああああああああああああああああああああああああああああああああああああああああああああああああ',
    price: '¥',
    imageUrl: menu4,
  },
];

function MenuRow({ item, index }: { item: MenuItem; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
    >
      {/* 写真エリア */}
      <div className="w-full md:w-1/2 max-w-md aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
        <img
          src={item.imageUrl}
          alt={item.name}
          title={`焼肉兄弟 亀戸店 - ${item.name}`}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* テキストエリア */}
      <div className="w-full md:w-1/2 text-left">
        <div className="flex items-baseline justify-between gap-4 mb-2 border-b border-primary-400 pb-3">
          <h3 className="font-yuji text-3xl md:text-4xl text-accent-400">
            {item.name}
          </h3>
          <span className="font-heading text-xl md:text-2xl font-bold text-foreground-100 whitespace-nowrap">
            {item.price}
          </span>
        </div>
        
        <p className="text-foreground-200 text-sm md:text-base leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function MenuSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="menu" className="relative w-full py-24 md:py-32 bg-background-50 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/3 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>


      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div ref={titleRef} className="text-center mb-16">
          <div
            className={`transition-all duration-700 ease-out ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
            }`}
          >
          </div>
          <h2
            className={`mt-4 text-3xl md:text-4xl lg:text-5xl font-yuji text-foreground-50 tracking-wide transition-all duration-700 delay-100 ease-out ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            お品書き
          </h2>
          <p
            className={`mt-3 text-foreground-200 text-sm font-label transition-all duration-700 delay-200 ease-out ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            焼肉兄弟 亀戸店で愛される逸品たち
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {menuItems.map((item, index) => (
            <MenuRow key={item.id} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}