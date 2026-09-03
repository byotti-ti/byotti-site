import Image from "next/image";
import { Reveal } from "./Reveal";
import { clientes } from "@/lib/depoimentos";

export function Clientes() {
  return (
    <section id="clientes" className="bg-white py-20 lg:py-24">
      <div className="container-x">
        <Reveal className="text-center">
          <span className="eyebrow">Clientes</span>
          <h2 className="mt-4 text-2xl sm:text-3xl">
            Empresas que confiam a sua TI à Byotti
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clientes.map((c) => (
              <li
                key={c.name}
                className="flex h-24 items-center justify-center rounded-xl border border-ice-200 bg-ice-50/50 px-6 grayscale transition-all duration-300 hover:grayscale-0 hover:border-brand-300 hover:bg-white"
              >
                <Image
                  src={c.file}
                  alt={c.name}
                  title={c.name}
                  width={200}
                  height={64}
                  className="max-h-12 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
