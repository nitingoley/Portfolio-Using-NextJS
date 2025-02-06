export const SectionHeader = ({ title, eyebrow, description }: { title: string; eyebrow: string; description: string }) => {
    return (
      <>
        <div className="flex justify-center">
          <p className="uppercase text-2xl font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mb-3">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-4 md:mt-6">
          {title}
        </h2>
        <p className="text-center md:text-lg text-white/60 lg:text-xl mt-4 max-w-md mx-auto">
          {description}
        </p>
      </>
    );
  };
  