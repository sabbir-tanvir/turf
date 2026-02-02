export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-black/60 sm:flex-row">
        <span>© 2026 Turf. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a className="hover:text-black" href="/privacy">
            Privacy
          </a>
          <a className="hover:text-black" href="/terms">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
