import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface MenuItem {
  id: number;
  name: string;
  nameJa: string;
  description: string;
  price: string;
  imageUrl: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: '特選',
    nameJa: '黒毛和牛カルビ',
    description: 'A5ランク黒毛和牛のリブロースを厚切りに。口の中でとろける極上の脂と旨味。',
    price: '¥1,980',
    imageUrl: 'https://readdy.ai/api/search-image?query=Premium%20thick-cut%20Japanese%20wagyu%20beef%20kalbi%20short%20rib%20on%20wooden%20plate%2C%20beautiful%20marbling%2C%20dark%20moody%20background%2C%20professional%20food%20photography%2C%20warm%20lighting%2C%20appetizing%20presentation&width=600&height=450&seq=menu-karubi-2026&orientation=landscape',
  },
  {
    id: 2,
    name: '極上',
    nameJa: '和牛ハラミ',
    description: '希少部位のハラミを特製タレでじっくり漬け込み。赤身の旨味が凝縮された逸品。',
    price: '¥1,680',
    imageUrl: 'https://readdy.ai/api/search-image?query=Premium%20Japanese%20wagyu%20harami%20skirt%20steak%20marinated%20in%20special%20sauce%2C%20glistening%20meat%20on%20black%20stone%20plate%2C%20dark%20atmosphere%2C%20professional%20food%20photography%2C%20rich%20texture&width=600&height=450&seq=menu-harami-2026&orientation=landscape',
  },
  {
    id: 3,
    name: '名物',
    nameJa: '厚切りタン塩',
    description: '厳選された牛タンの中心部分のみを使用。塩胡椒でシンプルに旨味を引き出す。',
    price: '¥1,580',
    imageUrl: 'https://readdy.ai/api/search-image?query=Thick-cut%20beef%20tongue%20gyutan%20with%20salt%20and%20pepper%20on%20ceramic%20plate%2C%20green%20onion%20garnish%2C%20lemon%20wedge%2C%20dark%20background%2C%20professional%20food%20photography%2C%20elegant%20presentation&width=600&height=450&seq=menu-tan-2026&orientation=landscape',
  },
  {
    id: 4,
    name: '逸品',
    nameJa: '和牛ユッケ',
    description: '新鮮な黒毛和牛の赤身を特製ユッケダレで。卵黄のコクが絡む絶品の一品。',
    price: '¥1,480',
    imageUrl: 'https://readdy.ai/api/search-image?query=Premium%20Japanese%20wagyu%20yukke%20beef%20tartare%20with%20egg%20yolk%20on%20top%2C%20sesame%20seeds%2C%20sliced%20pear%20garnish%2C%20dark%20elegant%20background%2C%20professional%20food%20photography%2C%20rich%20colors&width=600&height=450&seq=menu-yukke-2026&orientation=landscape',
  },
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group cursor-pointer transition-all duration-700 ease-out rounded-2xl overflow-hidden bg-secondary-200 hover:bg-primary-600 p-8 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
    >
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-background-100">
        <img
          src={item.imageUrl}
          alt={`焼肉兄弟 ${item.nameJa}`}
          title={`焼肉兄弟 亀戸店 ${item.nameJa}`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="mb-3">
        <span className="inline-block text-accent-500 text-xs font-label tracking-widest uppercase border border-accent-500/30 rounded-full px-3 py-1 group-hover:border-accent-300 group-hover:text-accent-300 transition-colors duration-300">
          {item.name}
        </span>
      </div>

      <h3 className="text-foreground-50 font-heading font-bold text-xl mb-2 tracking-wide group-hover:text-foreground-50 transition-colors duration-300">
        {item.nameJa}
      </h3>

      <p className="text-foreground-400 text-sm leading-relaxed mb-4 group-hover:text-foreground-300 transition-colors duration-300">
        {item.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-accent-500 font-heading font-bold text-lg group-hover:text-accent-300 transition-colors duration-300">
          {item.price}
        </span>
        <span className="inline-flex items-center gap-1 text-accent-500 text-sm font-label group-hover:gap-2 transition-all duration-300">
          詳しく見る
          <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
        </span>
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
            className={`mt-3 text-foreground-100 text-base font-label transition-all duration-700 delay-200 ease-out ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            焼肉兄弟 亀戸店で最も愛される逸品たち
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}