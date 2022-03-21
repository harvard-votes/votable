import Sidebar from "../components/Sidebar";

function SidebarContainer(props) {
    return (
        <>
            <Sidebar />
            <div className="ml-64">{props.children}</div>
        </>
    );
}

export default SidebarContainer;
