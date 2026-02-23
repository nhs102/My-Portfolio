export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Shawn Nam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
