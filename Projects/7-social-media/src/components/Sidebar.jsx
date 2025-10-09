const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style={{ width: 280 }}
      >
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            onClick={() => {
              setSelectedTab("Home");
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Home" && "active"
              }`}
              aria-current="page"
            >
              {" "}
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                aria-hidden="true"
              >
                <use xlinkHref="#home" />
              </svg>
              Home
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("Create post");
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Create post" && "active"
              }`}
            >
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                aria-hidden="true"
              >
                <use xlinkHref="#speedometer2" />
              </svg>
              Create post
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
