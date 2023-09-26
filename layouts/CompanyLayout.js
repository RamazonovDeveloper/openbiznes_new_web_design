export default function CompanyLayout({children}) {
  return (
    <div>
        <div className="side_bar">
            <h1>Sidebar</h1>
        </div>

        <div>
            <div className="app_bar">
                <h1>App Bar</h1>
            </div>
            <div className="main_section">
                <h1>Main Section</h1>
                {children}
            </div>
        </div>
    </div>
  )
}
