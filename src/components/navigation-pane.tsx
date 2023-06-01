import * as React from 'react';
import { Icon, IStyleSet, Label, ILabelStyles, Pivot, IPivotItemProps, PivotItem, Stack, StackItem, SearchBox } from '@fluentui/react';
import { NavList } from './nav-list';

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { margin: 10 },
};

interface IPivotGroupPanelPivot {
    pivot: IPivotItemProps,
    content: JSX.Element
}
interface IPivotGroupPanelProps {
    pivots: IPivotGroupPanelPivot[]
}

export const PivotGroupPanel: React.FC<IPivotGroupPanelProps> = ({ pivots }: IPivotGroupPanelProps) => {
    return (
        <div>
            <Pivot
                aria-label="Pivot Overflow Menu Example"
                linkFormat='links'
                overflowBehavior='menu'
                overflowAriaLabel="more items"
            >
                {
                    pivots.map(item => (
                        <PivotItem {...item.pivot} >
                            {item.content}
                        </PivotItem>
                    ))
                }
            </Pivot>
        </div>
    );
};

interface IPivotNavigationPanelNav extends IPivotGroupPanelProps {
    route: string,
}
interface IPivotNavigationPanelProps {
   pivotNavGroups: Array<IPivotNavigationPanelNav>
}

export const PivotGroupNavigationPanel: React.FC<IPivotNavigationPanelProps> = ({ pivotNavGroups }: IPivotNavigationPanelProps) => {
    return (
        <div>
           <Stack horizontal >
            <StackItem>
                <Stack>
                <SearchBox placeholder="Search" underlined={true} />;
                <NavList></NavList>
                </Stack>
            </StackItem>
            <StackItem>
                {
                    pivotNavGroups.map(group => <PivotGroupPanel pivots={group.pivots} ></PivotGroupPanel>)
                }
            </StackItem>
           </Stack>
        </div>
    );
};
