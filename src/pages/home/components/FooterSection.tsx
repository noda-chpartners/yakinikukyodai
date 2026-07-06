export default function FooterSection() {

  return (
    <footer className="relative w-full bg-background-50 pt-20 pb-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-0 w-full h-px bg-accent-500"></div>
        <div className="absolute top-[200px] left-0 w-full h-px bg-accent-500"></div>
        <div className="absolute top-[380px] left-0 w-full h-px bg-accent-500"></div>
        <div className="absolute top-20 left-[20%] w-px h-[360px] bg-accent-500"></div>
        <div className="absolute top-20 left-[50%] w-px h-[360px] bg-accent-500"></div>
        <div className="absolute top-20 left-[80%] w-px h-[360px] bg-accent-500"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-16">
          {/* Left: Brand + Newsletter */}
          <div className="lg:w-[40%]">
            <h3 className="text-2xl font-heading font-bold text-foreground-50 tracking-wide">
              焼肉兄弟<span className="text-accent-500">.</span>
            </h3>

    </div>

          {/* Right: Links */}
          <div className="lg:w-[60%] grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="text-foreground-50 font-label font-bold text-sm mb-4 tracking-wider">メニュー</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-foreground-500 text-sm font-label hover:text-foreground-200 transition-colors duration-200 whitespace-nowrap">カルビ</a></li>
                <li><a href="#" className="text-foreground-500 text-sm font-label hover:text-foreground-200 transition-colors duration-200 whitespace-nowrap">ハラミ</a></li>
                <li><a href="#" className="text-foreground-500 text-sm font-label hover:text-foreground-200 transition-colors duration-200 whitespace-nowrap">タン塩</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground-50 font-label font-bold text-sm mb-4 tracking-wider">店舗情報</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-foreground-500 text-sm font-label hover:text-foreground-200 transition-colors duration-200 whitespace-nowrap">営業時間</a></li>
                <li><a href="#" className="text-foreground-500 text-sm font-label hover:text-foreground-200 transition-colors duration-200 whitespace-nowrap">アクセス</a></li>
                <li><a href="#" className="text-foreground-500 text-sm font-label hover:text-foreground-200 transition-colors duration-200 whitespace-nowrap">お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground-50 font-label font-bold text-sm mb-4 tracking-wider">ご予約</h4>
              <ul className="space-y-2.5">
                <li><a href="tel:03-5875-2371" className="text-foreground-500 text-sm font-label hover:text-foreground-200 transition-colors duration-200 whitespace-nowrap">電話予約</a></li>
                <li><a href="#" className="text-foreground-500 text-sm font-label hover:text-foreground-200 transition-colors duration-200 whitespace-nowrap">宴会予約</a></li>
                <li><a href="#" className="text-foreground-500 text-sm font-label hover:text-foreground-200 transition-colors duration-200 whitespace-nowrap">貸切予約</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground-50 font-label font-bold text-sm mb-4 tracking-wider">SNS</h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://www.instagram.com/yakiniku.kyodai/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-foreground-500 text-sm font-label hover:text-foreground-200 transition-colors duration-200 whitespace-nowrap"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-600 text-xs font-label">
            &copy; {new Date().getFullYear()} 焼肉兄弟 亀戸店. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/yakiniku.kyodai/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="cursor-pointer w-8 h-8 rounded-md border border-secondary-300 flex items-center justify-center hover:border-accent-500 hover:bg-accent-500/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <i className="ri-instagram-line text-foreground-400 text-sm w-4 h-4 flex items-center justify-center"></i>
            </a>
          </div>
          <a href="#" className="text-foreground-600 text-xs font-label hover:text-foreground-300 transition-colors duration-200 whitespace-nowrap">
            プライバシーポリシー
          </a>
        </div>
      </div>
    </footer>
  );
}