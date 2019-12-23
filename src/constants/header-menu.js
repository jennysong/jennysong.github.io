export default function(menu) {
    switch(menu) {
        case "appleIcon":
            return [
                { type: 'text', text: 'About This Mac' },
                { type: 'text', text: 'System Preference...'},
                { type: 'text', text: 'Location' },
                { type: 'text', text: 'App Store...' },
                { type: 'text', text: 'Recent Items' },
                { type: 'text', text: 'Sleep' },
                { type: 'text', text: 'Restart...' },
                { type: 'text', text: 'Shut Down...' },
                { type: 'text', text: 'Log Out Jenny Song...' }
            ]
        default:
            return [{type: 'text', text: menu}]
    }

}
