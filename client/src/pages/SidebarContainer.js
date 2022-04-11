import Sidebar from "../components/Sidebar";

function SidebarContainer(props) {

    return (
        <>
            <Sidebar setAuthState={props.setAuthState}/>
            <div className="ml-64">{props.children}</div>
        </>
    );
}

export default SidebarContainer;
