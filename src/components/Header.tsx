const Header = () => {

  return (
      <nav className="nav-extended orange darken-4 ">
          <div className="nav-wrapper ">
              <a href="/task-manager" className="brand-logo">Task Manager</a>
              <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i
                  className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="https://cd3vane.dev/projects/4-task-manager">About project</a></li>
                  <li><a href="https://cd3vane.dev">Back to Portfolio</a></li>
              </ul>
          </div>
      </nav>
  )
}


export default Header
