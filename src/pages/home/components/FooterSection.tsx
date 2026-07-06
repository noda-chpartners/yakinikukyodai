import logo from '@/assets/logo.png';

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-background-50 pt-20 pb-8 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        
        {/* コンテナを中央に配置（md:mx-auto）し、内包する要素を中央寄せ（md:items-center, md:text-center） */}
        <div className="flex flex-col gap-10 mb-16 max-w-xl md:mx-auto md:items-center text-left md:text-center">
          
          {/* 1. ロゴ + 住所 */}
          {/* sm:items-center で横並び時に縦の中央揃え */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src={logo}
              alt="焼肉兄弟 亀戸店"
              className="w-24 h-24 flex-shrink-0 object-contain"
            />
            <div className="space-y-1">
              <p className="text-foreground-50 font-heading font-bold text-lg tracking-wide">
                焼肉兄弟 亀戸店
              </p>
              <p className="text-foreground-200 text-sm font-label leading-relaxed">
                〒136-0071 東京都江東区亀戸５丁目１３−７ 第2丸惣ビル 1F
              </p>
            </div>
          </div>
          
          {/* 電話番号 */}
          <a
            href="tel:03-5875-2371"
            className="inline-flex items-center justify-start md:justify-center gap-1 text-foreground-50 font-label font-bold text-xl hover:text-accent-500 transition-colors -mb-3"
          >
            <i className="ri-phone-line text-accent-500" />
            03-5875-2371
          </a>
          
          {/* 営業時間 */}
          {/* md:items-center で中身を中央揃えに */}
          <div className="space-y-3 -mb-3 flex flex-col items-start md:items-center">
            <div>
              <p className="text-foreground-400 text-xs font-label">平日</p>
              <p className="text-foreground-200 text-sm font-label">11:00〜14:30／15:00〜23:00</p>
              <p className="text-foreground-200 text-sm font-label">15:00〜23:00</p>            </div>
            <div>
              <p className="text-foreground-400 text-xs font-label">土日祝</p>
              <p className="text-foreground-200 text-sm font-label">11:00〜23:00</p>
            </div>
          </div>

          {/* リンク */}
          {/* md:justify-center で要素を中央に配置 */}
          <div className="flex items-center justify-start md:justify-center gap-8 w-full">
            <a
              href="https://www.instagram.com/yakiniku.kyodai/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-3 inline-flex items-center gap-2 text-foreground-200 text-sm font-label hover:text-accent-500 transition-colors"
              aria-label="Instagram"
            >
              <i className="ri-instagram-line text-accent-500 hover:text-accent-400 transition-colors text-lg" />
              Instagram
            </a>
            <a
              href="https://yakinikukyoudai.owst.jp/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-3 inline-flex items-center gap-2 text-foreground-200 text-sm font-label hover:text-accent-500 transition-colors"
              aria-label="Website"
            >
              <i className="ri-global-line text-accent-500 hover:text-accent-400 transition-colors text-lg" />
              Website
            </a>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-secondary-200 pt-6 text-center">
          <p className="text-foreground-600 text-xs font-label">
            &copy; {new Date().getFullYear()} 焼肉兄弟 亀戸店. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}