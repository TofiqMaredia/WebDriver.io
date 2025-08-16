import Page from "../page";


class MainPage extends Page {
    
    get menuDashboard () { return $('~tag_dashboard') }
    get menuReports () { return $('~tag_reports') }
    get menuStorage () { return $('~tag_storage') }
    get menuNotes () { return $('~tag_notes') }
    get menuSettings () { return $('~tag_settings') }

}

export default new MainPage;