"use client"
export default function Footer() {
    return (
        <footer className="bg-black text-white/60 pt-16 pb-8 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div className="md:col-span-4">
            <span className="text-2xl font-black text-white tracking-tight block mb-2 uppercase">Asset Elixir</span>
            <p className="text-lg text-yellow-400 font-bold mb-4">With You, Through It All.</p>
            <p className="text-base text-white/70 leading-relaxed max-w-sm mb-4">
              Thoughtful financial guidance built around your life, your responsibilities, and the future you are working toward.
            </p>
            <span className="inline-block text-xs uppercase font-black tracking-widest text-black bg-yellow-400 px-2.5 py-1 rounded">
              SEBI Registered Investment Adviser
            </span>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-sm font-black uppercase tracking-wider text-white mb-4">Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
              <li><a href="#insights" className="hover:text-yellow-400 transition">Financial Insights</a></li>
              <li><a href="#calculators" className="hover:text-yellow-400 transition">Calculators</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Free Portfolio Review</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Book a Free Call</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-sm font-black uppercase tracking-wider text-white mb-4">Services</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Wealth Planning</li>
              <li>Investment Strategy</li>
              <li>Protection Planning</li>
              <li>Retirement Planning</li>
              <li>Tax Optimisation</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-sm font-black uppercase tracking-wider text-white mb-4">Contact Info</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="font-black text-yellow-400 text-base tracking-wide">+91 70210 89870</li>
              <li>assetelixir@gmail.com</li>
              <li className="text-white/60 leading-normal mt-2">
                B Wing, Arihant Aura, 201,<br />
                Thane - Belapur Rd, Turbhe MIDC,<br />
                Turbhe, Navi Mumbai, MH 400703
              </li>
            </ul>
          </div>

        </div>

        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center text-[10px] uppercase font-bold tracking-wider text-white/40">
          <p>&copy; 2026 Asset Elixir. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            SEBI Registered Investment Adviser Reg. No. INAXXXXXXXXXX
          </p>
        </div>
      </footer>
    )
}