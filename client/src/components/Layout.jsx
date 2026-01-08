import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

const Layout = ({ children, theme, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar is fixed, so we need a spacer or margin */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-[250px] transition-all duration-300">
        {/* Top Header with Theme Toggle */}
        <div className="h-16 border-b border-border flex items-center justify-end px-8 sticky top-0 bg-background/80 backdrop-blur-sm z-40">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Page Content */}
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
