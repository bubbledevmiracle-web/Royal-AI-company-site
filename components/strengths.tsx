import { Code2, Megaphone, CircuitBoard, Cpu, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { strengths } from '@/lib/content';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Megaphone,
  CircuitBoard,
  Cpu,
};

export function Strengths() {
  return (
    <section className="relative py-24 lg:py-32 section-gradient overflow-hidden">
      {/* AI-themed background accent */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4">
              What We Do Best
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Royal AI&apos;s Strengths
            </h2>
            <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-6" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Four pillars of technical excellence that define our capability to
              deliver world-class products across the full technology spectrum.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {strengths.map((strength, idx) => {
            const Icon = iconMap[strength.icon] ?? Code2;
            const reversed = idx % 2 === 1;
            return (
              <Reveal key={strength.title} delay={idx * 150} direction={reversed ? 'right' : 'left'}>
                <div
                  className={`group flex flex-col ${
                    reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } items-center gap-8 p-6 lg:p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 h-full`}
                >
                  <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={strength.image}
                      alt={strength.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                    <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
                      {strength.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
