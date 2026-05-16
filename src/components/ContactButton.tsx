interface ContactButtonProps {
  className?: string;
}

export const ContactButton = ({ className = "" }: ContactButtonProps) => {
  return (
    <a
      href="https://www.facebook.com/h4ipknc.ph4w/"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-block rounded-full uppercase tracking-widest font-medium text-white transition-all duration-300
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base
        bg-[linear-gradient(123deg,#18011F_7%,#B600A8_37%,#7621B0_72%,#BE4C00_100%)]
        shadow-[0px_4px_4px_rgba(181,1,167,0.25),inset_4px_4px_12px_#7721B1]
        outline outline-2 outline-white -outline-offset-[3px]
        hover:scale-105 active:scale-95
        ${className}
      `}
    >
      Contact Me
    </a>
  );
};
