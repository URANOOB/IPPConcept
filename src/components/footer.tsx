import Image from "next/image";
import idpacLogo from "../../public/LOGOROJOIDPAC-p-500.png";
import logoSymbol from "../../public/logo.png";

const contactEmail = "inglespalapaz@gmail.com";

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M4 6h16v12H4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3.3" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.4" cy="7.7" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M16.62 3c.28 2.38 1.62 3.8 4.02 3.96v3.22a7.14 7.14 0 0 1-4.02-1.23v5.96c0 3.02-2.03 5.09-5.12 5.09-2.8 0-5.14-1.77-5.14-4.72 0-3.34 2.92-5.22 6.15-4.55v3.37c-1.5-.49-2.85.18-2.85 1.5 0 1 .78 1.58 1.75 1.58 1.13 0 1.88-.66 1.88-2.12V3h3.33Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="paper-texture relative overflow-hidden text-[#321018]">
      <div className="mx-auto grid min-h-112 max-w-7xl grid-cols-1 px-6 pt-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="relative flex min-h-72 flex-col justify-between lg:min-h-92">
          <p className="font-brush max-w-sm text-2xl font-black leading-tight text-[#321018]">
            El inglés no es el fin, sino el medio para honrar nuestra identidad.
          </p>

          <div className="pointer-events-none absolute -bottom-10 left-8 h-64 w-64 sm:left-16 sm:h-76 sm:w-76 lg:left-10">
            <Image
              src={logoSymbol}
              alt=""
              fill
              sizes="19rem"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div className="relative flex min-h-92 flex-col items-start lg:items-end">
          <div className="flex flex-col items-start gap-5 lg:items-end">
            <a
              href={`mailto:${contactEmail}`}
              className="font-brush inline-flex items-center gap-3 text-lg font-black text-[#321018] transition hover:text-(--ipp-coral)"
            >
              <MailIcon className="h-4 w-4" />
              {contactEmail}
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Instagram de Ingles Pa' La Paz"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#321018] text-white transition hover:-translate-y-1 hover:bg-(--ipp-coral)"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir TikTok de Ingles Pa' La Paz"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#321018] text-white transition hover:-translate-y-1 hover:bg-(--ipp-coral)"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-auto w-full overflow-hidden pb-6 pt-10 text-right font-sans font-black tracking-[-0.04em] text-[#321018]">
            <span className="block translate-y-4 leading-[0.8] text-[clamp(5.5rem,12vw,9.4rem)]">
              Inglés
            </span>
            <span className="block translate-y-7 whitespace-nowrap leading-[0.7] text-[clamp(4.3rem,8.6vw,7.6rem)]">
              Pa&apos; La Paz
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-[#321018] px-6 py-7 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg font-black">&copy; 2026 Inglés Pa&apos; la Paz</p>

          <Image
            src={idpacLogo}
            alt="Logo IDPAC y Bogota"
            width={500}
            height={109}
            className="h-auto w-56 brightness-0 invert sm:w-64"
          />
        </div>
      </div>
    </footer>
  );
}
