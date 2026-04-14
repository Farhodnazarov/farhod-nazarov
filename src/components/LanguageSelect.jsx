import { motion } from "framer-motion";

export default function LanguageSelect({
  open,
  setOpen,
  languages,
  currentLang,
  handleChange,
}) {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.7 } }}
      className="relative"
    >
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer rounded-xl border border-white/50 bg-black px-6 py-2"
      >
        {languages.find((l) => l.code === currentLang)?.label}
      </div>

      {open && (
        <ul className="absolute mt-1 w-full rounded-xl border border-white/50 bg-black">
          {languages.map((item) => (
            <li
              key={item.code}
              onClick={() => handleChange(item)}
              className="cursor-pointer px-5 py-3 hover:rounded-xl hover:bg-white/20"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
