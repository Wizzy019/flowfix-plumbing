import { Phone, MessageCircle } from "lucide-react";

const FloatingContactButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-toast flex flex-col gap-3">
      <a
        href="https://wa.me/1234567890"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle size={24} />
      </a>

      <a
        href="tel:+1234567890"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:scale-105"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingContactButton;
