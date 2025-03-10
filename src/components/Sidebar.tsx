
const menuItems = [
    { titulo: "Dashboard", path: "/" },
    { titulo: "Projects", path: "/projects" },
    { titulo: "Reports", path: "/reports" },
    { titulo: "Analytics", path: "/analytics" },
    { titulo: "Settings", path: "/settings" }
];


const Sidebar  = () => {
    return (
        <>
            <nav className="sidebar p-3 vh-100 border-end bg-dark">
                <ul className="nav flex-column">
                    {menuItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <a className="nav-link text-white" href={item.path}>
                                {item.titulo}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;