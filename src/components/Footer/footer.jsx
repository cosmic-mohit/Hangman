function Footer() {
  return (
    <div className="
      fixed bottom-0 left-0 w-full
      text-center py-2
      text-xs text-gray-400
      bg-white/70 backdrop-blur-sm
      border-t border-gray-200
      z-40
    ">
      © {new Date().getFullYear()} Mohit Sengar
    </div>
  );
}

export default Footer;