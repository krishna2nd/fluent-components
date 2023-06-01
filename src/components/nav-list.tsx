import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

const navStyles: Partial<INavStyles> = {
    root: {
        width: 208,
        height: 350,
        boxSizing: 'border-box',
        border: '1px solid #eee',
        overflowY: 'auto',
    },
};

const navLinkGroups: INavLinkGroup[] = [
    {
        links: [
            {
                name: 'Messaging',
                url: '#/1pc/settings',
                key: 'key1',
                ariaCurrent: 'page'
            
            },
            {
                name: 'Pages',
                url: '#/1pc/voice',
                key: 'key2',
                ariaCurrent: 'page'
            },
            {
                name: 'Activity',
                url: '#/1pc/messaging',
                key: 'key3',
            },
            {
                name: 'MSN',
                url: '#/1pc/meeting',
                disabled: true,
                key: 'key4',
            }
        ]
    }
];

export const NavList: React.FunctionComponent = () => {
    const [selectedNav, setSelectedNav] = React.useState(navLinkGroups[0].links[0].key as string);

    const _onLinkClick = (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
        item?.key && setSelectedNav(item?.key)
    }

    return (
        <Nav
            onLinkClick={_onLinkClick}
            selectedKey={selectedNav}
            ariaLabel="Org-wide settings"
            styles={navStyles}
            groups={navLinkGroups}
        />
    );
};

