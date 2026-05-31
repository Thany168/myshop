import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* 1. Sidebar */}
      <Sidebar />

      {/* Right side container */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* 2. Top Navbar */}
        <Navbar />

        {/* 3. Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}