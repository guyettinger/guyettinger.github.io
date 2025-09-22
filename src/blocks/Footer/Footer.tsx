export const Footer = () => {
    return (
        <footer className="w-full border-t">
            <div className="flex h-[52px] items-center justify-center text-sm">
                © {new Date().getFullYear()} Guy Ettinger
            </div>
        </footer>
    )
}