import Navbar from "/components/navbar/Navbar";

const AppLayout = ({ children }) => (
  <div className="bg-gradient-to-r from-gray-900  to-blue-primary font-comfortaa">
    <Navbar />
    {children}
  </div>
);

export default AppLayout;
